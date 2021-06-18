# `Record` utility type in Typescript

`Record<Keys, Type>`
Creates a type with a set of properties `Keys` of the type `Type`. This is a much easier way of making a typed object.

```typescript
interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};
```

This requires all values of the Keys to be present in the Record

https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype

#js
#ts