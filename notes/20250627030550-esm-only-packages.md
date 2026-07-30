# ESM only packages

#todo - break this down into a few more zettles
- what type: module does on its own
- why TS needs file extensions now

ESM is a much more modern standard, and given the complexity of [[20250627030527-cjs-esm-bundling]], some maintainers are opting to produce ESM only packages.

```
Error [ERR_REQUIRE_ESM]: require() of ES Module esm-only-package not supported.
```

When using a ESM package, you cannot `require` the package, leaving you with a few options:
1. Use `type: module` in your application (package.json)
	1. This tells Node to interpret .js files within this package as ESM, rather than the default CJS
2. Use `await import`
3. Use Node 22, which can `require` ESM packages

To ensure your Typescript project is using ESM properly, you may need to change `module` and `moduleResolution` to newer values, such as `nodenext`.

Additionally there's some weirdness around using file extensions in imports which I don't fully understand yet. I believe you need to explicitly add `.js` imports, as that's what your compiled code would point to. https://www.totaltypescript.com/relative-import-paths-need-explicit-file-extensions-in-ecmascript-imports
	There's also `allowImportingTsExtensions` as a config option.

https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
https://antfu.me/posts/publish-esm-and-cjs#compatibility

[[20250627030527-cjs-esm-bundling]]
[[20250627100132-js-module-types]]

[[buildtooling]]
[[dependencies]]
[[npm]]
