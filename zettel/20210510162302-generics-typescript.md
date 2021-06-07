# Generics in Typescript

Generics exist in more languages than Typescript (notably C# and Java). They allow for creating reusable components that work across a variety of types, rather than a single one. This allows users to consume these components and provide their own types.

```typescript
function identity<T>(arg: T): T {
  return arg;
}

// Both work
let output = identity<string>("myString");
let output = identity("myString");
```

The generic type variable (`T`) can be named anything - it's helpful to give it a more meaningful name in more complicated functions.

Generics can be used in classes, types, interfaces, etc. This is where a lot of power comes from, as they can be passed through a type, to a function, to an interface, and then finally to a React prop for type safety.
They can also be constrained: e.g. `T extends Lengthwise` so now `arg.length` is valid, and you won't be able to pass in a number as it doesn't have a `.length`

#js
#ts