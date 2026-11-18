# Typescript string unions with autocomplete

Typescript doesn't have a way of supporting autocomplete when using a literal string union that includes `string`. Naturally, everything broadens to `string`.

While this makes sense, it's not great for autocomplete, or documentation. A workaround that exists is the 'open string union':

```ts
type LiteralUnion<T extends U, U = string> = T | (U & {});
let x: LiteralUnion<"hello" | "world">;
x = "hey";
```

This is done as a generic, but the real magic is in the type. A simplified example:
```
type ColorSwatchColor = 'transparent' | (string & {})
```

https://github.com/microsoft/TypeScript/issues/29729

[[ts]]