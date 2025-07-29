# Typescript Path Aliases

[[ts]] has a really simple way of adding aliases to import paths, relative to the base of your project. This makes it easy to use absolute paths rather than relative paths, which can often be easier to read, and help with [[refactoring]].

Be aware that this tells Typescript that OTHER tools are responsible for resolving these imports.
>Note that this feature does not change how import paths are emitted by `tsc`, so `paths` should only be used to inform TypeScript that another tool has this mapping and will use it at runtime or when bundling.

To do this, simply update the `paths` configuration in ths TSConfig
```typescript
{
  "compilerOptions": {
    "paths": {
        "app/*": ["./src/app/*"],
        "config/*": ["./src/app/_config/*"],
        "environment/*": ["./src/environments/*"],
        "shared/*": ["./src/app/_shared/*"],
        "helpers/*": ["./src/helpers/*"],
        "tests/*": ["./src/tests/*"]
    },
}
```

https://www.typescriptlang.org/tsconfig#paths