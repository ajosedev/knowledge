# Type predicates in Typescript

Typescript does a lot to automatically figure out types through regular Javascript code, but type predicates offer more direct control over types. A type predicate is a return type which takes the form of `parameterName is Type`. When the function is called with a variable, that variable will be narrowed to that specific type if it's compatible.

```typescript
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```

[[20210705102809-narrowing]]

#ts