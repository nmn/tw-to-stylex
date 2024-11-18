/**
 * @flow strict
 */

import { Features, transform } from "lightningcss";
import { compile } from "tailwindcss";
import fs from "fs";
import path from "path";

const __dirname = path.dirname(import.meta.url ?? ".");
let filePath = path.join(__dirname, "../theme.css");
filePath = filePath.replace("file:", "");

export async function run(
  classes: string | $ReadOnlyArray<string>,
  theme?: string = fs.readFileSync(filePath, "utf-8")
): Promise<string> {
  const candidates = typeof classes === "string" ? classes.split(" ") : classes;

  let { build } = await compile(`${theme}\n\n@tailwind utilities;`);
  const cssLines = optimizeCss(build(candidates));

  return cssLines;
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
