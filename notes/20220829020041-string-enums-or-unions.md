# String literal union type vs enums

```ts
// With string enums
export enum ButtonStatus {
  HIDDEN = 'HIDDEN',
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED',
};

// With union types of string literals
type ButtonStatus = 'HIDDEN' | 'ENABLED' | 'DISABLED';
```

As a general rule, string literal unions are a better default.

**String literal unions**
- Work without any need to import
- Simple to extend
- Switch statements require all paths for a union (better maintenance)
- Removed at compilation

**Enums**
- Can be iterated over
- Easier to rename/refactor/find in your codebase (e.g. search for `ButtonStatus.`)
- Can be documented individually with JSDoc

Note you can actually convert an enum into a string union type fairly easily:
```ts
type ButtonStatusStrings = `${ButtonStatus}`
type ButtonStatusStrings = keyof typeof ButtonStatus
```

[[20210510170807-keyof-typeof-typescript]]

Old doc on this: https://medium.com/@katbusch/typescript-enums-explained-e5f9a101afc9

[[ts]]