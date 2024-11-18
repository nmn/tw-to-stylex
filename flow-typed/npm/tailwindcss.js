/**
 * @flow strict
 */

declare module "tailwindcss" {
  declare export type CompileOptions = $ReadOnly<{
    base?: string,
    loadModule?: (
      id: string,
      base: string,
      resourceHint: "plugin" | "config"
    ) => Promise<{
      // module: Plugin | Config,
      base: string,
    }>,
    loadStylesheet?: (
      id: string,
      base: string
    ) => Promise<{ content: string, base: string }>,
  }>;
  declare export function compile(
    css: string,
    opts?: CompileOptions
  ): Promise<{
    +globs: Array<{ base: string, pattern: string }>,
    +root:
      | null // Unknown root
      | "none" // Explicitly no root specified via `source(none)`
      | { base: string, pattern: string }, // Specified via `source(…)`, relative to the `base`
    +build: (candidates: $ReadOnlyArray<string>) => string,
  }>;
}
