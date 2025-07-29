# Node behaviour with nested relative node_modules imports

A recent problem I ran into when importing a ESM module.

When using `preserveModules` in Rollup, the package creates a nested `node_modules` file with the relevant dependencies. Thus the entry point of the file had a relative import to said file, e.g.
`import { clsx } from '../../node_modules/clsx/dist/clsx.js';`

Even though the module was ESM, it would treat `clsx.js` as a CJS module, leading to errors. I'm not sure why it correctly treats the module as ESM, but the nested file as CJS.

When testing this behaviour with Node 20+, the issue goes away.

The easiest solution I've found for this is to rename the `node_modules` folder to something else, which for whatever reason stops this behaviour.
Alternatively you can choose to not bundle the dependency, if appropriate (#todo - link)

https://github.com/rollup/rollup/issues/3684
https://jeremyrichardson.dev/blog/vite-rollup-preservemodules-for-libraries

[[buildtooling]]
[[js]]
[[node]]