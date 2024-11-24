/**
 * @flow strict
 */

import { Features, transform } from "lightningcss";
import { compile } from "tailwindcss";
import fs from "fs";
import path from "path";

let filePath = path.join(__dirname, "../theme.css");
filePath = filePath.replace("file:", "");

export async function makeCompiler(
  theme: string = fs.readFileSync(filePath, "utf-8")
): Promise<(string) => string> {
  let { build } = await compile(`${theme}\n\n@tailwind utilities;`);
  return (classes: string | $ReadOnlyArray<string>): string => {
    const candidates =
      typeof classes === "string" ? classes.split(" ") : classes;

    const cssLines = optimizeCss(build(candidates));
    return cssLines;
  };
}

export function optimizeCss(
  input: string,
  {
    file = "input.css",
    minify = false,
  }: {
    file?: string,
    minify?: boolean,
  } = {}
): string {
  return transform({
    filename: file,
    code: Buffer.from(input),
    // minify,
    sourceMap: false,
    drafts: {
      customMedia: true,
    },
    nonStandard: {
      deepSelectorCombinator: true,
    },
    include: Features.Nesting,
    // exclude: Features.LogicalProperties,
    targets: {
      safari: (16 << 16) | (4 << 8),
    },
    errorRecovery: true,
  }).code.toString();
}
