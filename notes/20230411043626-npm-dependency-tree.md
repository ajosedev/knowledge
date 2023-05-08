# How NPM installs different versions

As explained in [[20230411040305-node-dependencies]], only dependencies (i.e. not devDependencies) are installed transitively. Although, what happens if there are multiple versions of the same dependency?

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

https://stackoverflow.com/questions/65487385/should-i-duplicate-peerdependencies-in-dependencies-field-of-package-json

[[node]]
[[npm]]