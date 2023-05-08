# Index signatures

Index signatures help apply a shape of the values, even if you don't have all the property names yet.

```typescript
type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
};

const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};
```

[[ts]]