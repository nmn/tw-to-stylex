/**
 * @flow strict
 */

/* $FlowFixMe */
import postcss from "postcss";
import CheatSheet from "./cheatsheet";

const arbitrarySupportedClasses = {
  pt: "padding-top",
  pb: "padding-bottom",
  pl: "padding-left",
  pr: "padding-right",
  p: "padding",
  mb: "margin-bottom",
  m: "margin",
  mt: "margin-top",
  ml: "margin-left",
  mr: "margin-right",
  w: "width",
  h: "height",
  top: "top",
  bottom: "bottom",
  left: "left",
  right: "right",
  bg: "background",
  border: "border-color",
  text: "color",
  aspect: "aspect-ratio",
  color: "color",
  "max-w": "max-width",
  "max-h": "max-height",
};


const getBreakPoints = (input: string, breakpoint: string) => {
  return input
    .replaceAll("\n", " ")
    .split(" ")
    .filter((i: string) => i.startsWith(breakpoint + ":"))
    .map((i: string) => i.substring(3));
};

const getHoverClass = (input: string) => {
  return input
    .replaceAll("\n", " ")
    .split(" ")
    .filter((i) => i.startsWith("hover:"))
    .map((i) => i.replace("hover:", ""));
};

export type JssValue =
  | string
  | null
  | { default: JssValue, [string]: JssValue };
export type Jss = { [string]: JssValue };

function dashedToCamelCase(str: string): string {
  if (str.startsWith("--")) {
    return str;
  }
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}


// Extract pseudo classes and elements from a selector
// Account for slash escaping.
export function extractPseudos(selector: string): Array<string> {
  const pseudos = [];

  for (let i = 0; i < selector.length; i++) {
    if (selector[i] === "\\") {
      i++;
      continue;
    }

    if (selector[i] === ":") {
      let pseudo = "";
      let stack = [];
      i++;
      if (selector[i] === ":") {
        pseudo += "::";
        i++;
      } else {
        pseudo += ":";
      }
      for (; i < selector.length; i++) {
        if (selector[i] === "\\") {
          pseudo += selector[i];
          i++;
          pseudo += selector[i];
          continue;
        }
        if (selector[i] === "(" && stack[stack.length - 1] !== '"') {
          stack.push("(");
        }
        if (selector[i] === '"') {
          stack.push('"');
        }
        if (selector[i] === ")" && stack[stack.length - 1] === "(") {
          stack.pop();
        }
        if (selector[i] === '"' && stack[stack.length - 1] === '"') {
          stack.pop();
        }
        if (["[", ",", ":", " "].includes(selector[i]) && stack.length === 0) {
          i--;
          break;
        }
        pseudo += selector[i];
      }
      pseudos.push(pseudo);
    }

    if (selector[i] === "[") {
      let pseudo = "";
      let stack = [];
      for (; i < selector.length; i++) {
        if (selector[i] === "\\") {
          pseudo += selector[i];
          i++;
          pseudo += selector[i];
          continue;
        }
        if (selector[i] === "(" && stack[stack.length - 1] !== '"') {
          stack.push("(");
        }
        if (selector[i] === '"') {
          stack.push('"');
        }
        if (selector[i] === ")" && stack[stack.length - 1] === "(") {
          stack.pop();
        }
        if (selector[i] === '"' && stack[stack.length - 1] === '"') {
          stack.pop();
        }
        pseudo += selector[i];
        if (selector[i] === "]" && stack.length === 0) {
          break;
        }
      }
      pseudos.push(`:is(${pseudo})`);
    }
  }
  return pseudos;
}

const deeplyAddValue = (
  obj: Jss,
  value: string,
  [condition, ...conditions]: $ReadOnlyArray<string>,
) => {
  if (conditions.length === 0) {
    obj[condition] = value;
    return;
  }
  const subObject =
    typeof obj[condition] === "string"
      ? { default: obj[condition] }
      : obj[condition] ?? { default: null };
  obj[condition] = subObject;
  deeplyAddValue(subObject, value, conditions);
};

export const convertFromCssToJss = (
  classNames: string | $ReadOnlyArray<string>,
  css: string,
): null | Jss => {
  // console.log("classNames", classNames);
  // console.log("css", css);
  const toMatch = typeof classNames === "string" 
    ? classNames.split(' ')
    : classNames;
  try {
    const root = postcss.parse(css);
    const object: Jss = {};
    const processNode = (node: any, atRules: $ReadOnlyArray<string> = []) => {
      if (node.type === "root") {
        for (let child of node.nodes) {
          processNode(child, atRules);
        }
        return;
      }
      if (node.type === "atrule") {
        const atRuleRaw = node.toString();
        const atRule = atRuleRaw.split("{")[0].trim();
        if (!atRule.startsWith("@media") &&
            !atRule.startsWith("@supports") &&
            !atRule.startsWith("@container") &&
            !atRule.startsWith("@scope")
        ) {
          return;
        }
        if (atRule.startsWith("@layer")) {
          for (let child of node.nodes) {
            processNode(child, atRules);
          }
          return;
        }
        for (let child of node.nodes) {
          processNode(child, [...atRules, atRule]);
        }
        return;
      }
      if (node.type === "rule") {
        
        const pseudos = extractPseudos(node.selector);
        let className = pseudos
          .reduce(
            (acc, pseudo) => acc.replace(pseudo, ""),
            node.selector
              .replace(/^\./, '')
              .replaceAll(' .', '')
              .replaceAll("\\", "")
          );
        if (toMatch.includes(className)) {
          for (let child of node.nodes) {
            processNode(child, [...atRules, ...pseudos]);
          }
        }
        return;
      }
      if (node.type === "decl") {
        const propName = dashedToCamelCase(node.prop);
        if (object[propName] == null && atRules.length === 0) {
          object[propName] = node.value;
          return;
        }

        if (atRules.length === 0) {
          // last applied style wins!
          if (typeof object[propName] === "string") {
            object[propName] = node.value;
          } else {
            object[propName] = {
              ...object[propName],
              default: node.value,
            };
          }
          return;
        }

        const pseudoElementIndexes: Array<number> = atRules
          .map((r, i) => r.startsWith("::") ? i : null)
          .filter((i)/*: i is number*/ => i !== null);

        if (pseudoElementIndexes.length > 0) {
          const lastPseudoElementIndex = pseudoElementIndexes[
            pseudoElementIndexes.length - 1
          ];
          const untilLastPseudoElement = atRules.slice(0, lastPseudoElementIndex + 1);
          const afterLastPseudoElement = atRules.slice(lastPseudoElementIndex + 1);

          deeplyAddValue(object, node.value, [...untilLastPseudoElement, propName, ...afterLastPseudoElement]);
        } else {
          deeplyAddValue(object, node.value, [propName, ...atRules]);
        }
      }
    };
    processNode(root);
    return object;
  } catch (e) {
    console.log(e);
    return null;
  }
};

// const testCss = `
// /*! tailwindcss v4.0.0-alpha.24 | MIT License | https://tailwindcss.com */
// .text-3xl {
//   font-size: 1.875rem;
//   line-height: 2.25rem;
// }

// .font-bold {
//   font-weight: 700;
// }

// .tracking-tighter {
//   letter-spacing: -0.05em;
// }

// @media (width >= 40rem) {
//   .sm\\:text-5xl {
//     font-size: 3rem;
//     line-height: 1;
//   }
// }

// @media (width >= 80rem) {
//   .xl\\:text-6xl\\/none {
//     font-size: 3.75rem;
//     line-height: 1;
//   }
// }
// `;

// console.log(convertFromCssToJss(testCss));
