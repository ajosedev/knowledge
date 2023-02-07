# The satisfies operator in Typescript

Typescript 4.9 introduces the `satisfies` operator, a method of matching a type without changing its resulting type.

In the following example, the `Record` annotation means that all values of our keys could either be a `string` or `RGB`. This works well when authoring the object, but accessing values can lead to issues. What Typescript previously knew was a string, now thinks it could be either a string or RGB.
```typescript
type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];
const palette: Record<Colors, string | RGB> = {
    red: [255, 0, 0],
    green: "#00ff00",
    bleu: [0, 0, 255]
//  ~~~~ The typo is correctly detected
};
// But we now have an undesirable error here - 'palette.red' "could" be a string.
const redComponent = palette.red.at(0);
```

The `satisfies` operator fixes this. The resulting type doesn't get changed, but the object must still satisfy another type.
```typescript
type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];
const palette = {
    red: [255, 0, 0],
    green: "#00ff00",
    bleu: [0, 0, 255]
//  ~~~~ The typo is now caught!
} satisfies Record<Colors, string | RGB>;
// Both of these methods are still accessible!
const redComponent = palette.red.at(0);
const greenNormalized = palette.green.toUpperCase();
```

A common solution to this is to use `as`, however that can lead to dangerous bugs. `as` effectively tells Typescript that you've okay'd this type matching another type, even when it does not.

It can be combined with [[20220801115328-typescript-const-assertion]].

https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html

[[ts]]