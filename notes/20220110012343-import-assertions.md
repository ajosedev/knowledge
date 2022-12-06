# Import assertions

Typescript 4.5 supports **import assertions**, allowing runtimes to make sure that an import has an expected format.

```typescript
import obj from "./something.json" assert { type: "json" };

const obj = await import("./something.json", {
    assert: { type: "json" }
});
```

This should be enabled in vanilla Javascript in the near future.

[[js]]
[[ts]]