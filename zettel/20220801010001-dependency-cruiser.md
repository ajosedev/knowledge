# Dependency cruiser

Dependency cruiser, or Depcruse, is a tool used to visualise your dependencies in Javascript/Typescript/etc.
It's primary use is to validate dependencies against your own rules and show any violated rules. However as a side effect, it can make nice dependency graphs.

If using it with Typescript (or other similar tools), make sure it's installed at the same spot `dependency-cruiser` is installed.

An example command:
```sh
depcruise --ts-pre-compilation-deps \
--ts-config "tsconfig.base.json" \
--exclude "^node_modules" \
--collapse "^libs" \
--progress \
--output-type dot \
apps/spa/src/pages/browse-projects/JobListingsPage \
| dot -T svg > dependencygraph.svg

```

Different filtering options: doNotFollow, includeOnly, focus, exclude, collapse, maxDepth
https://github.com/sverweij/dependency-cruiser/blob/develop/doc/options-reference.md#filters

The `--progress` flag is helpful for larger commands.

if `dot` is needed: `brew install graphviz`

https://github.com/sverweij/dependency-cruiser

[[js]]
[[shell]]
[[tools]]
[[ts]]