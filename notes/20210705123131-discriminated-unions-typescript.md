# Discriminated unions in Typescript

**Discriminated unions** use a property to discriminate between union members, so that Typescript knows what type you're dealing with it a certain time. This property is known as a `discriminant`.

As far as I can tell, this is the best way to enable type safety, as you can get some strange bugs (e.g. [[20251107113342-typescript-unions-excess-properties]]) otherwise. In fact, you can get something that compiles safely but breaks at runtime, as explained in that doc.

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

If a discriminated property is not possible, using a [[20210705104556-type-predicates-typescript]] can help be more explicit and get proper narrowing.

You can also leverage `never` if a discriminant is not possible, but it's not always strictly better. This unfortunately doesn't narrow the type, in fact it broadens the type as those properties now exist, but can't have values. A type predicate almost becomes mandatory here as `a` and `b` can both exist at the same time.
```ts
type A = { a: string; b?: never }
type B = { a?: never; b: string }

type Props = A | B

const Test1: Props = { a: 'a' }
const Test2: Props = { b: 'b' }
const Test3: Props = { a: 'a', b: 'b' } // appropriately fails

const Foo = (props: Props) => {
  console.log(props.a, props.b) // both now exist
  if ('a' in props) {
    console.log(props.b) // b is string | undefined
  }

  if (typeof props.a === 'string') {
    console.log(props.b) // b is undefined, but still no error. Ideally it does not exist, but props is not narrowed
  }
}

Foo(Test3) // does not fail
Foo({ a: 1, b: 1 }) // appropriately fails
const x = { a: 1, b: 1 }
Foo(x) // appropriately fails
```
Granted, this would likely fail at creating the `props` object passed to `Foo`. It also does fix the `Foo(x)` problem mentioned in [[20251107113342-typescript-unions-excess-properties]]. 

Using a discriminated union improves the DX a little bit, thanks to narrowing.

```ts
type A = { kind: 'a', a: string }
type B = { kind: 'b', b: string }

type Props = A | B

const Test1: Props = { kind: 'a', a: 'a' }
const Test2: Props = { kind: 'b', b: 'b' }
const Test3: Props = { kind: 'b', a: 'a' } // fails

const Foo = (props: Props) => {
  if ('a' in props) {
    console.log(props.b) // b now does not exist, as props is `A`
  }
}

Foo(Test3) // does not fail
Foo({ a: 1, b: 1 }) // appropriately fails
const x = { a: 1, b: 1 }
Foo(x) // appropriately fails
```


[[20230403123124-union-intersection-extends-ts]]
[[20210705102809-ts-narrowing]]
[[20251107113342-typescript-unions-excess-properties]]

https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#discriminated-unions

[[ts]]