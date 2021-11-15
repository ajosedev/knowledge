# Typescript (previously) can't narrow using `const` variables

Prior to https://github.com/microsoft/TypeScript/pull/44730, it was not possible to narrow conditional expressions that are referenced in a `const`. They had to be inserted directly into the `if` statement, which added some duplication to the code. As of Typescript 4.4, the control flow analysis has been updated so this is possible:
```typescript
function f1(x: unknown) {
    const isString = typeof x === 'string';
    if (isString) {
        x.length;  // Ok
    }
}
```

[[20210705102809-narrowing]]

[[ts]]