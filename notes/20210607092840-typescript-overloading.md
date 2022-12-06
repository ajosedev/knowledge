# Typescript function overloads

```typescript
type Hello = ((name: string) => void) & ((name: number) => void);

const helloConst: {
  (name: number): void;
  (name: string): void;
} = (name: number | string): void => {
  // ...
}
```

Overloaded function statements are not checked as strictly as the `const` assignment. Overloaded function statements allow the implementation signature's return type to match a union of the return types of the call signatures, even though is not safe.

```typescript
function goodbye(name: number): number;
function goodbye(name: string): string;
function goodbye(name: number | string): number | string {
  return typeof name === "number" ? name + 1 : name + "!";
}
```

```typescript
const goodbyeConst: { // error!
  (name: number): number;
  (name: string): string;
} = (name: number | string): number | string =>
    typeof name === "number" ? name + 1 : name + "!";
// Type '(name: string | number) => string | number' 
// is not assignable to 
// type '{ (name: number): number; (name: string): string; }'.
```

[[js]]
[[ts]]