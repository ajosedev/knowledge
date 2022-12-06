# `typeof` type operator in Typescript

Javascript has a `typeof` operator that you can use in an **expression** context.
Typescript adds a `typeof` operator that you can use in a **type** context to refer to the type of a variable or property.

```typescript
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;
//   ^ = type P = {
//       x: number;
//       y: number;
//   }
```

[[js]]
[[ts]]