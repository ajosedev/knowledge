# Literal types in Typescript

Literals are types that refer to _specific_ strings and numbers. They can be combined into unions to create types that only allow for a selection of strings or numbers. This can be useful for restricting propertys to specific values, such as `fontWeight` only accepting `bold`, `bolder`, etc.

There are **string literals** and **numeric literals**

```typescript
type alignment = 'left' | 'middle' | 'right'
type fib = 1 | 2 | 3 | 5 | 8
```

[[20210816125035-template-literal-types-ts]]

[[ts]]