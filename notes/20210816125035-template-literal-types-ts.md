# Template literal types in Typescript

The template literal type shares the same syntax as template literal string in Javascript, but lets you create types with concatenation and permutations. It can be used both statically (in the example below) to create possibilities from a list of permutations, or dynamically using things like `extend`.

```typescript
type VerticalAlignment = "top" | "middle" | "bottom";
type HorizontalAlignment = "left" | "center" | "right";

type Alignment = `${VerticalAlignment}-${HorizontalAlignment}`
// top-left, top-center, top-right, middle-left, etc.
```

There's also some included helper types for string manipulation:
- Uppercase<StringType>
- Lowercase<StringType>
- Capitalize<StringType>
- Uncapitalize<StringType>

https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html

For a more concrete use case, see [[20220124091907-template-literal-types-ts-example]]

[[ts]]