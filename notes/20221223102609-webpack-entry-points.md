# Entry points in Webpack

An Entry Point in [[webpack]] is the starting point for Webpack to figure out and build the dependency tree. Usually there's a single entry point, which in turn produces a single bundle file.

Multiple entry points can be set, which creates multiple bundle files with their own dependency trees. Instead of just having `index.html` and `index.js` as your only entry point, you can have a separate bundle for `about.html` (`about.js`). The page then only needs to load the specific, smaller bundle.

This is a useful avenue for [[20220911060950-code-splitting]], although it has its downsides. Namely that duplicated modules exist across multiple bundles.

[[buildtooling]]
[[deployment]]
[[performance]]