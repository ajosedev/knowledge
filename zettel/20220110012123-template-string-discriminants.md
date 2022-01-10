# Template String Types as Discriminants

Typescript 4.5 enables the ability to narrow using template string types, and also recognises template string types as discriminates. Meaning to following is now possible:

```typescript
export interface Success {
    type: `${string}Success`;
    body: string;
}

export interface Error {
    type: `${string}Error`;
    message: string;
}

export function handler(r: Success | Error) {
    if (r.type === "HttpSuccess") {
        // 'r' has type 'Success'
        let token = r.body;
    }
}
```

[[ts]]