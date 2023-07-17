# Typescript Path Aliases

[[ts]] has a really simple way of adding aliases to import paths, relative to the base of your project. This makes it easy to use absolute paths rather than relative paths, which can often be easier to read, and help with [[refactoring]].

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