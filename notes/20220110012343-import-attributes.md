# Import attributes

Typescript 4.5 supports **import attributes** (previously import assertions), allowing runtimes to make sure that an import has an expected format.

```typescript
import obj from "./something.json" with { type: "json" };

const obj = await import("./something.json", {
    assert: { type: "json" }
});
```

This is enabled in Node 17.5.0, and tweaked in Node 18.20.0

The keyword was previously `assert`, but has been replaced by `with`.

[[js]]
[[ts]]