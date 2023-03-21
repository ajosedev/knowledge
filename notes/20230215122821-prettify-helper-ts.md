# Prettify intersection types in Typescript

Often the resolved type is not very readable, in some cases it doesn't truly resolve and just shows you the combinations. With this helper, Typescript gives you a better evaluation, which is helpful for debugging.

```ts
type Prettify<T> = {
	[K in keyof T]: T[K];
}
```

This has many names and forms, including `Compute`, `Merge`, `Flatten`, etc.

https://twitter.com/mattpocockuk/status/1622730173446557697

[[ts]]