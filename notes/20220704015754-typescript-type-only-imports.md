# Typescript Type-only imports

Typescript 3.8 introduced type-only imports and exports.

>`import type` only imports declarations to be used for type annotations and declarations. It _always_ gets fully erased, so there’s no remnant of it at runtime. Similarly, `export type` only provides an export that can be used for type contexts, and is also erased from TypeScript’s output.

This can be helpful for edge-case problems, such as when `isolatedModules` is enabled and you are re-exporting types. Most of the time this provides no benefit.

However in the future, tools might become better at optimising [[performance]] and reliability around type definition analysis.

```ts
import type { SomeThing } from "./some-module.js";
export type { SomeThing };
```

https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export

[[ts]]