# tw-to-stylex

A simpler code translator to convert code using Tailwind to code using StyleX

## TODO

- [x] `className={cn("m-1 text-red-500", prop.className)}`
  - should become `{..._stylex.props(styles.$1, prop.className)}`
  - but is currently: `{..._stylex.props(styles.$1)}`
- [x] There might multiple stylex imports, but it should be fine.
- [x] It'll insert a second `stylex.create` call even when one exists
- [-] Support this pattern: `<div className={cn(`hidden lg:inline-flex text-[${tokens.textColor}]`)} />`
- [ ] Add and use a custom `tw` function to behave like `stylex.atom()`.

- [ ] A Babel plugin for `style:x={}` instead of a spread
