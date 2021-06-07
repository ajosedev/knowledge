# Using `keyof typeof` in Typescript

This combination is useful to take a JS object and turn it into a literal union type, based on the object's keys.

```typescript
const dataObj = { x: 'foo', y: 1 };

type Data = typeof dataObj; // { x: string, y: number }
type DataKeys = keyof Data; // "x" | "y"

// or
type Keys = keyof typeof dataObj;
```

#js
#ts