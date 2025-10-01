# Entry points in package.json

There's three different ways of dictating the entry point of your package in a `package.json`. These are mostly due to slow changes over time in Node.

`main` was the original, `module` was an unofficial standard, and `exports` is the new way.

`main` is supported in all versions of Node, but doesn't have much flexibility. It's recommended to still use it for backwards compatibility of other tools/plugins.
`exports` allows multiple entry points to be defined, including different entry points depending on environments, such as CJS/ESM. `exports` takes priority over `main`, in supported versions.

Note that `module` is still used by Typescript is `moduleResolution` is set to `node`. 

I've found the best usage to be something like the following, taken from `clsx`:
```json
{
  "main": "dist/clsx.js", // CJS, as most newer things use exports
  "module": "dist/clsx.mjs", // ESM
  "types": "clsx.d.ts",
  "exports": {
    ".": {
	  // For ESM
      "import": {
	    // types per exports field is best practice
        "types": "./clsx.d.mts",
        "default": "./dist/clsx.mjs"
      },
      // For CJS, as a fallback
	  // I've also seen `require` used as a key for CJS, then usually `default` is made ESM, but that should be unnecessary.
      "default": {
        "types": "./clsx.d.ts",
        "default": "./dist/clsx.js"
      }
    },
    // Multiple entry points supported
    "./lite": {
      "import": {
        "types": "./clsx.d.mts",
        "default": "./dist/lite.mjs"
      },
      "default": {
        "types": "./clsx.d.ts",
        "default": "./dist/lite.js"
      }
    }
}
```

Note that if you use `exports`, only the paths you have allowed for are now valid. You can no longer use deep imports, which is both good and bad.

[[20250627100132-js-module-types]]

https://hirok.io/posts/package-json-exports
https://stackoverflow.com/questions/68572936/what-is-the-difference-between-main-and-module-vs-exports-in-package-json

[[buildtooling]]
[[dependencies]]
[[node]]
[[npm]]
