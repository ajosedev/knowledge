# Default exports in JS

In general, aim for using named exports over default exports in Javascript.

Named exports:
- Support autocomplete/auto-import better
- Work better with Typescript
- Allow for easier refactoring, as the exported name always matches the imported name
- Don't allow for typos
- Easier re-exporting
- Cleaner dynamic imports

[[js]]
[[ts]]