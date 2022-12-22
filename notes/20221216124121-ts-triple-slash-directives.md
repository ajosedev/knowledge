# Triple slash directives in Typescript

Triple slash directives indicate to the [[ts]] compiler that types from another module are available in a file.

```ts
/// <reference path="..." />
```

In general, there are better ways of adding types than triple slash directives. For example, ESModule imports, or adding the file to a TSConfig.

https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html