# Indexed access types

These are useful to look up a specific property on another type. The syntax is similar to an array index in vanilla Javascript.

```typescript
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];
// type Age = number
```

The indexing type is itself a type, so it's possible to use unions, other types, `keyof`, etc.
```typescript
type I1 = Person["age" | "name"];
// type I1 = string | number

type I2 = Person[keyof Person];
// type I2 = string | number | boolean

type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];
// type I3 = string | boolean
```

[[20210331123636-mapped-types]]

https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html

[[ts]]