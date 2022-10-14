# Parameters with default values

```ts
// ⛔️ Error: Parameter cannot have question mark and initializer.ts(1015)
function sum(a: number, b? = 10) {
  return a + b;
}
```

The fix is simple, don't use a question mark. Parameters with a default value are implied to be optional.

[[ts]]