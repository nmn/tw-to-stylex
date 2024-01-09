# tw-to-stylex

A simpler code translator to convert code using Tailwind to code using StyleX

## TODO

- [ ] `className={cn("m-1 text-red-500", prop.className)}`
  - should become `{..._stylex.props(styles.$1, prop.className)}`
  - but is currently: `{..._stylex.props(styles.$1)}`
- [ ] There might multiple stylex imports, but it should be fine.
- [ ] It'll insert a second `stylex.create` call even when one exists
- [ ] Support this pattern: `<div className={cn(`hidden lg:inline-flex text-[${tokens.textColor}]`)} />`
