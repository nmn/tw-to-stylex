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

const convertToCss = (classNames: string[]) => {
  let cssCode = "";
  CheatSheet.forEach((element) => {
    element.content.forEach((content) => {
      content.table.forEach((list) => {
        if (classNames.includes(list[0])) {
          cssCode += `${list[1]} \n`;
        }

        if (classNames.includes(list[1])) {
          const semicolon = list[2][list[2].length - 1] !== ";" ? ";" : "";
          cssCode += `${list[2]}${semicolon} \n`;
        }
      });
    });
  });

  // Check for arbitrary values

  const arbitraryClasses = classNames.filter((className) =>
    className.includes("[")
  );

  arbitraryClasses.forEach((className) => {
    try {
      const property = className.split("-[")[0].replace(".", "");

      const matches = className.match(/(?<=\[)[^\][]*(?=])/g);
      if (!matches) {
        return;
      }

      const properyValue = matches[0];
      if (arbitrarySupportedClasses[property]) {
        cssCode += `${arbitrarySupportedClasses[property]}: ${properyValue};\n`;
      }
    } catch (e) {
      console.log(e);
    }
  });

  return cssCode;
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

export const getConvertedClasses = (input: string): string => {
  if (input === "") return "";

  const classNames = input
    .split(/\s+/)
    .map((i) => i.trim())
    .filter((i) => i !== "");
  const breakpoints = CheatSheet[0].content[1].table;

  const hoverClasses = getHoverClass(input);

  const smClasses = getBreakPoints(input, "sm");
  const mdClasses = getBreakPoints(input, "md");
  const lgClasses = getBreakPoints(input, "lg");
  const xlClasses = getBreakPoints(input, "xl");
  const _2xlClasses = getBreakPoints(input, "2xl");

  const resultCss = `${convertToCss(classNames)}
${
  smClasses.length !== 0
    ? breakpoints[0][1].replace("...", "\n  " + convertToCss(smClasses))
    : ""
}
${
  mdClasses.length !== 0
    ? breakpoints[1][1].replace("...", "\n  " + convertToCss(mdClasses))
    : ""
}
${
  lgClasses.length !== 0
    ? breakpoints[2][1].replace("...", "\n  " + convertToCss(lgClasses))
    : ""
}
${
  xlClasses.length !== 0
    ? breakpoints[3][1].replace("...", "\n  " + convertToCss(xlClasses))
    : ""
}
${
  _2xlClasses.length !== 0
    ? breakpoints[4][1].replace("...", "\n  " + convertToCss(_2xlClasses))
    : ""
}
${hoverClasses.length !== 0 ? `:hover {\n ${convertToCss(hoverClasses)} }` : ""}
`;

  return resultCss;
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

export const convertFromCssToJss = (css: string): null | Jss => {
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
        for (let child of node.nodes) {
          processNode(child, [...atRules, atRule]);
        }
        return;
      }
      if (node.type === "rule") {
        const pseudos = extractPseudos(node.selector);
        for (let child of node.nodes) {
          processNode(child, [...atRules, ...pseudos]);
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
          .filter((i): i is number => i !== null);

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
// .flex {
//   display: flex;
// }

// .flex-col {
//   flex-direction: column;
// }

// .gap-\\[var\\(--foo\\)\\] {
//   gap: var(--foo);
// }

// .bg-sky-500 {
//   background-color: oklch(.685 .169 237.323);
// }

// .hover\\:bg-\\[green\\] {
//   &:hover {
//     @media (hover: hover) {
//       background-color: green;
//     }
//   }
// }

// @media (width >= 48rem) {
//   .md\\:bg-sky-500 {
//     background-color: oklch(.685 .169 237.323);
//   }
// }
// `;

// console.log(convertFromCssToJss(testCss));
