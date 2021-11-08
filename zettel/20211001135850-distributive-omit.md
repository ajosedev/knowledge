# Distributive Omit & Pick

`Pick<>` and `Omit<>` are not applied distributively to union types by default (i.e. to each union subtype). Instead, they are applied the common proprties of the union.

```typescript
type Base<T> = T & {
    base: string;
}
type A = {
    a: string;
}
type B = {
    b: string;
}

type P = (Base<A> | Base<B>) & { toRemove: string };
type Q = Omit<P, "toRemove">;

// Q is actually { base: string }, not Base<A> | Base<B>
```

An alternative approach is to use a custom version of `Omit` (or `Pick`) that applies distributively over a union type:
```typescript
type DistributiveOmit<T, K extends keyof T> = T extends unknown
    ? Omit<T, K>
    : never;
```

#ts