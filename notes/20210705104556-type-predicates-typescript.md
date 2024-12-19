# Type predicates in Typescript

Typescript does a lot to automatically figure out types through regular Javascript code, but type predicates offer more direct control over types. A type predicate is a return type which takes the form of `parameterName is Type`. When the function is called with a variable, that variable will be narrowed to that specific type if it's compatible.

```typescript
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```

As of TS 5.5, the return type is no longer necessary, making for less brittle predicates: https://www.totaltypescript.com/type-predicate-inference

[[20210705102809-ts-narrowing]]

[[ts]]