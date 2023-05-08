# Getting the value of a array or mapped type in Typescript

Using [[20210610110122-indexed-access-types]], it's possible to get the type of an array's elements, or an interface. When dealing with an actual array (as oppose to a type), this can be used with `typeof` to generate a type.

```typescript
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = typeof MyArray[number];    
// type Person = {
//    name: string;
//    age: number;
// }
```

Rather than looking up a specific property, e.g. `MyArray['name']`, we're using `number` as an arbitrary type to get the type of all elements. `string` also works for this case as that's what [[js]] uses for array lookups.

It's also possible to use this with [[20210331123636-mapped-types]].
```typescript
type MappedType = {
  [K: string]: string | string[];
};

type ExtractedType = MappedType[number]
// ExtractedType = string | string[]
```

If needed, this can be written as a utility function:
```typescript
type ValueOf<T> = T[keyof T];

type Foo = { a: string, b: number };
type ValueOfFoo = ValueOf<Foo>; // string | number
```

https://stackoverflow.com/questions/49285864/is-there-a-valueof-similar-to-keyof-in-typescript

[[ts]]