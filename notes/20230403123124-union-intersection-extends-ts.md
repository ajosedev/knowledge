# Unions, intersections, and extending interfaces

Some crucial terminology in Typescript.

Unions use the `|` operator to form a type from two or more other types. The value can be **any** of those types. Each type is known as a **union member**.
```typescript
type id = number | string
```

Intersections use the `&` operator to form a type combining **all** of the members of existing types.
```typescript
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
 
type ColorfulCircle = Colorful & Circle;

const c: ColorfulCircle = { color: 'red', radius: 10 };
```

The `extends` keyword is similar, allowing one to add additional members to an existing type.

```typescript
interface Colorful {
  color: string;
}
 
interface Circle {
  radius: number;
}
 
interface ColorfulCircle extends Colorful, Circle {}
 
const c: ColorfulCircle = { color: 'red', radius: 10 };
```

The two are similar, but have differences around overriding properties, working with dynamic properties, and more.

[[ts]]