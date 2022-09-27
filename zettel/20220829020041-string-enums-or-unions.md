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
- Easier to rename/refactor?


Old doc on this: https://medium.com/@katbusch/typescript-enums-explained-e5f9a101afc9

[[ts]]