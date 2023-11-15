# Declaration files in Typescript

>`.d.ts` files are _declaration_ files that contain _only_ type information. These files don’t produce `.js` outputs; they are only used for typechecking.

These are useful for describing libraries that are not written in [[ts]], e.g. [[js]]-only libraries.

If you're working within a Typescript project, you probably shouldn't be using them. If you need to separate types, keep them in a `.ts` file, not a `.d.ts` file for a myriad of reasons. Namely, they can't contain runtime functionality, and put everything in the global scope. They are not modules.
https://www.youtube.com/watch?v=zu-EgnbmcLY

Declaration files are usually bundled with packages. Packages are built into `.js` files, with a separate co-located `d.ts` file. Otherwise, `@types` packages from `DefinitelyTyped` are useful. These are community created packages that describe popular libraries.

If the types don't exist at all, [[20221215045252-ts-ambient]] can be used to create types for the third party library.

TypeScript automatically finds type definitions under `node_modules/@types`. Meaning if the library is set up correctly, the consumer doesn't have to do anything special. This is controlled by the `typeRoots` option in TSConfig.
There's also the `types` option, which does similar. `typeRoots` is for folders, `types` is for exact types.

If you specify either `typeRoots` to `types`, it **removes** the default behaviour of finding all `@types`. Thus setting these options requires you to be all encompassing.
e.g:
```json
  "compilerOptions": {
    "types": ["node", "jest", "express"]
  }
```

>This `tsconfig.json` file will _only_ include `./node_modules/@types/node`, `./node_modules/@types/jest` and `./node_modules/@types/express`. Other packages under `node_modules/@types/*` will not be included.