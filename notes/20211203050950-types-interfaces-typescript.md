# Types vs Interfaces in Typescript

Types and interfaces are actually quite similar, and it comes mostly down to preference. The following are some cases where you're forced to use a particular style.

Typescript recommends the following as a heuristic:
>For the most part, you can choose based on personal preference, and TypeScript will tell you if it needs something to be the other kind of declaration. If you would like a heuristic, use `interface` until you need to use features from `type`.

## Types only
Discriminated unions [[20210705123131-discriminated-unions-typescript]]
Extending discriminated unions
Its best practice to not have empty interfaces, so using type for extending with [[20210329085445-typescript-utility-types|utility types]] is preferred

## Interfaces only
Extending a type/interface and wanting to override an existing property

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

[[ts]]