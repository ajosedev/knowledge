# Typescript const assertion

Const assertions (`as const`) can be useful for creating an object and narrowing the types based on the object.

In the following example we want to be able to provide named keys (`cardPadding`), but also ensure that the values map to `Space` e.g.
```ts
type Space =
    | '1bu'
    | '1.5bu';
    
const semantic: Record<string, Space> = {
    cardPadding: '1.5bu',
};
// Type is now:
// const semantic: Record<string, Space>
```

That didn't work, so we can try omitting the type and letting Typescript infer it.
```ts
const semantic = {
    cardPadding: '1.5bu',
};
// Type is now:
// const semantic: {
//    cardPadding: string;
// }
```
Close, but not quite right.

A decent solution is to use `as const`. This will ensure that the return type is narrow enough that it's compliant with `Space`, rather than the type appearing to be a `string`:
```typescript
const semantic = {
    cardPadding: '1.5bu',
} as const;
// Type is now:
// const semantic: {
//    readonly cardPadding: "1.5bu";
// }
```

The downside of this approach is that you lose the typechecking when creating the `semantic` object. Nothing (at this level) stops you from creating a value which isn't a `Space`.
With newer Typescript versions, you can fix this using [[20230126023053-typescript-satisfies]].

```typescript
const semantic = {
	cardPadding: '1.5bu',
} as const satisfies Record<string, Space>;
```
This retains the authoring experience, while outputting the same type.

https://stackoverflow.com/questions/66993264/what-does-the-as-const-mean-in-typescript-and-what-is-its-use-case

[[ts]]
