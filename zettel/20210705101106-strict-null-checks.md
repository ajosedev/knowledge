# Strict null checks in Typescript

As a general rule, enable `strictNullChecks` in your TSConfig.

By default, `null` and `undefined` are assignable to all types in Typescript:
```typescript
let foo: number = 123;
foo = null; // Okay
foo = undefined; // Okay

foo.bar() // May fail
```
This can lead to runtime errors when trying to access properties on objects that don't exist, which Typescript will not warn you about at compile time.

When using the `strictNullChecks` compiler option, `null` and `undefined` are not allowable by default. You can still use a union type (`string | null`) to accept these values.

There is also the 'Non-null assertion operator' (`!.`) which assers that its operand is non-null and non-undefined, e.g. `foo!.bar` asserts that `foo` is valid and we can call `bar` on it. This only 'ignores' the error, as it doesn't change any of the code at runtime.

#ts