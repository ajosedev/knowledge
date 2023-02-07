# Declaration files in Typescript

>`.d.ts` files are _declaration_ files that contain _only_ type information. These files don’t produce `.js` outputs; they are only used for typechecking.

These are useful for describing libraries that are not written in [[ts]], e.g. [[js]]-only libraries.

Declaration files are usually bundled with packages, as they are built into `.js` files, with a separate `d.ts` file. Otherwise, `@types` packages from `DefinitelyTyped` are useful. These are community created packages that describe popular libraries.

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