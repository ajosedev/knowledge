# How to declare iterable union types

This allows you to create a standard union type, but be able to iterate over it in vanilla JS.

```typescript
export const status = ["Open", "Pending", "Closed"] as const;

export type Status = typeof status[number]

// The Status type above is now this Union:
// export type Status = "Open" | "Pending" | "Closed"
```

https://stackoverflow.com/questions/40275832/typescript-has-unions-so-are-enums-redundant/60041791#60041791

[[js]]
[[ts]]