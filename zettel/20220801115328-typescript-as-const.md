# Typescript 'as const'

`as const` can be useful for creating an object and narrowing the types based on the object. e.g.
```ts
type Space =
    | '1bu'
    | '1.5bu';

const semantic = {
    cardPadding: '1.5bu',
} as const;
```

Without the `as const`, the return type of `semantic` is
```ts
const semantic: {
    cardPadding: string;
}
```

To get the return type to be `Space`, `Record<string, Space>` can be used, but this makes the key type a generic string rather than `cardPadding`. This in turn causes issues with `noPropertyAccessFromIndexSignature`.

Using `as const`, we get a narrow type for the value, which means it falls within the `Space` type.

However, you do lose the typechecking when creating the object that `Record` offers.

https://stackoverflow.com/questions/66993264/what-does-the-as-const-mean-in-typescript-and-what-is-its-use-case

[[ts]]
