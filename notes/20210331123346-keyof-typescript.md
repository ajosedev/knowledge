# `keyof` type operator in Typescript

The `keyof` operator takes an object type and produces a string or numeric literal union of its keys.

```typescript
type Point = { x: number; y: number };
type P = keyof Point; // type '"x" || "y"'

const coordinate: P = 'z' // Type '"z"' is not assignable to type '"x" | "y"'.
```

```typescript
interface Person {
  age: number;
  name: string;
}

type PersonKeys = keyof Person; // "age" | "name"
```

`extends keyof` is used to constrain the type of a generic parameter.
```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const person: Person = {
  age: 21,
  name: "Tobias",
};

// name is a property of person -> no error
const name = getProperty(person, "name");

// gender is not a property of person -> error
const gender = getProperty(person, "gender");
```

This can be very helpful for mapped types. [[20210331123636-mapped-types]]

[[js]]
[[ts]]