# Discriminated unions in Typescript

Union types are types formed from two or more other types, representing values that may be _any_ one of those types. Each type is known as a **union member**.

**Discriminated unions** use a property to discriminate between union members, so that Typescript knows what type you're deaing with it a certain time.

When every type in a union contains a common property with literal types, TypeScript considers that to be a _discriminated union_, and can narrow out the members of the union.

```typescript
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;
```

When using a type guard style check on the _discriminant_ property (e.g. `kind`), Typescript will narrow the object into that type.

[[20210705102809-narrowing]]

#ts