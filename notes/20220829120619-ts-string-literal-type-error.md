# String is not assignable to type

When using [[20210705121216-literal-types-typescript|string literal types]], its common to run into the following error:
```
Type 'string' is not assignable to type
```

Usually the code looks something like this:
```typescript
type EmailStatus = 'draft' | 'read' | 'unread';

// 👇️ status has type `string`
let status = 'draft';
status = 'read';

// ⛔️ Error: Type 'string' is not
// assignable to type 'EmailStatus'.ts(2322)
const current: EmailStatus = status;
```

This is because `status` is using the broader type of `string`, rather than the narrower type of `EmailStatus`.

One possible solution is to cast the value to the type:
```ts
let status = 'draft' as EmailStatus;
```

The other solution is to narrow the type with a [[20220801115328-typescript-const-assertion|const assertion]]:
```ts
let status = 'draft' as const;
```

[[20210705102809-ts-narrowing]]

[[ts]]