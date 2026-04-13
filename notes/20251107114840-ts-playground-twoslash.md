# Annotations in Typescript playground

The Playground supports showing the types at a certain location by using an empty comment with a `^?` to indicate the symbol you’re interested in:

```ts
const abc = "Hello"
//    ^?
```

Would add a realtime inline annotation about what the type of `abc` is into the editor. This can make typing complex types easier, and make it much more obvious when sharing code what you think is important.

[Example](https://www.typescriptlang.org/play/?#code/MYewdgzgLgBAhgI2DAvDARACQKYBtcjoBQA9CTBTAHoD8QA)

[[ts]]