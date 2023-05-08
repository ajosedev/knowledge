# Discriminated unions in Typescript

**Discriminated unions** use a property to discriminate between union members, so that Typescript knows what type you're dealing with it a certain time.

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

```typescript
if (shape.kind === 'circle') {
	console.log(shape.radius) // Works fine
	console.log(shape.sideLength) // Type error, as shape's type is Circle
}
```

[[20230403123124-union-intersection-extends-ts]]
[[20210705102809-ts-narrowing]]

[[ts]]