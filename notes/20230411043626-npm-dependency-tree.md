# How NPM installs different versions

As explained in [[20230411040305-node-dependencies]], only dependencies (i.e. not devDependencies) are installed transitively. Although, what happens if there are multiple versions of the same dependency?

This all assumes that these dependencies are not bundled into the package itself, which is sometimes the case. In these cases npm cannot handle multiple versions, etc. as they are not true 'dependencies', but are instead just considered part of the package source. [[20250627022325-bundling-dependencies]]

NPM installs a tree of dependencies. From a blank slate, installing `express` will create a `node_modules/express` directory, and likely create a `node_modules/express/node_modules` directory also. This will go down N levels, resolving transitive dependencies as needed.

```
node_modules/
├── foo/
│   └── node_modules/
│       ├── hello/
│       └── world/
└── bar/
    └── node_modules/
        ├── hello/
        └── goodbye/
```

Note that the `express/node_modules` folder is _likely_ created. This is due to how NPM flattens the dependency tree. The newest version of a package (including transitive dependencies) are lifted to the top-level. `npm dedupe` can help simplify the tree structure to optimise sharing, where possible.

Crucially, **multiple versions of a single package are allowed**. This works well when packages are contained. However if multiple packages share a common dependency **and** communicate with one another, errors can happen. In theory Peer Dependencies somewhat help in this area, depending on the use case.

Note when using `preserveModules` to bundle a package in Vite or Rollup, the dependency will create it's own internal `node_modules` folder inside of the package. Even though this shares the same name, it is different, and cannot be optimised by npm itself. [[20250627022152-node-behaviour-nested-node-modules]]

https://stackoverflow.com/questions/65487385/should-i-duplicate-peerdependencies-in-dependencies-field-of-package-json

[[buildtooling]]
[[node]]
[[npm]]