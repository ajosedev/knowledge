# Typescript unions are not mutually exclusive

By default, Typescript does not mark properties as excess if its present on any of the union members. It matches against either side of the union

```ts
type A = { a: string; }
type B = { b: number; }

type Props = A | B

const Test1: Props = { a: 'a' }
const Test2: Props = { b: 1 }
const Test3: Props = { a: 'a', b: 1 } // does not fail

const Foo = (props: Props) => {
  console.log(props.a, props.b) // appropriately fails
  if ('a' in props) {
    console.log(props.a)
    console.log(props.b) // b does not exist on type `A`
  }
}

Foo(Test3) // does not fail
Foo({ a: 1, b: 1 }) // appropriately fails
const x = { a: 1, b: 1 }
Foo(x) // does not fail, and `Foo` function would think `props.a` is a string
```

The best way around this is to use a discriminant as explained in [[20210705123131-discriminated-unions-typescript]].

Basing your check on a property that's supposed to exist is technically not type safe, as can be seen with the `Foo(x)` example above. A discriminated union fixes this.

https://github.com/microsoft/TypeScript/issues/20863
https://www.reddit.com/r/typescript/comments/1mecieg/is_there_a_better_way_to_handle_union_types_like/
https://stackoverflow.com/questions/52677576/typescript-discriminated-union-allows-invalid-state/52678379#52678379

[[ts]]