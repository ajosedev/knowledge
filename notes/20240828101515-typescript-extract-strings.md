# Extract Utility Type

Constructs a type by extracting from `Type` all union members that are assignable to `Union`.

```ts
type Animal = "cat" | "dog" | "bird" | "fish";

type ExtractType = Extract<Animal, "cat" | "dog">; // 'cat' | 'dog
```

This can be useful for extracting a primitive type too

```ts
type Space = 0 | 1 | 2 | '0' | '1' | '2';

type SpaceStrings = Extract<Space, string>;
```

https://dev.to/arafat4693/best-ways-to-use-extract-in-typescript-jc2

[[ts]]