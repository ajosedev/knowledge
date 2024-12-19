# Unions, intersections, and extending interfaces

Some crucial terminology in Typescript.

## Unions
Unions use the `|` operator to form a type from two or more other types. The value can be **any** of those types - it's similar to an 'OR'. Each type is known as a **union member**.
```typescript
type id = number | string
```

If there is a value that is a union type, we can only access members that are common to all types in the union.
```ts
interface Bird {
  fly(): void;
  layEggs(): void;
}
 
interface Fish {
  swim(): void;
  layEggs(): void;
}
 
type Animal = Bird | Fish
// only Animal.layEggs exists, as it's the common field
```

## Intersections
Intersections use the `&` operator to form a type combining **all** of the members of existing types. It's similar to an 'AND', in some regards.
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

Note that the intersection type is a little different when you're dealing with primitive types, as there is often no intersection between the two, e.g:
```ts
type id = number & string
// id: never, as there's no intersection between the two types

type Animal = 'lion' | 'tiger';
type Domestic = 'bee' | 'cow';
type DomesticAnimal = Animal & Domestic;
// DomesticAnimal: never
```

## Extends
The `extends` keyword is similar to intersections, allowing one to add additional members to an existing type.

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

The two (extends and intersections) are similar, but have differences around overriding properties, working with dynamic properties, and more.

One advantage of the latter (interfaces), is that it will throw an error if a member present on both interfaces doesn't match:
```ts
interface A {
    a: number;
    foo: string;
}

interface B {
    b: boolean;
    foo: number;
}

// Error: Types of property 'foo' are incompatible.
interface AB extends A {
    foo: number;
}
```

[TS Repro Link](https://www.typescriptlang.org/play/?#code/PQKhCgAIUgVALAlgZ0gBwDYEMCeBzAJwHsBXAOwBNIsAXGgUwFs0bUajJl4iB3AYyzJ6kGvGEVEAM0n0C9Mn2EAjejR715UGAAN6ADwaVk26pUjaAZCZ6JRkIkoBW9PjWBy+RAlRo409ZAA6LWBwcEQyBgJJLEVIAEFIAG8oSDSsAC5IMhJGFQIAblS0ySIiLOQaAgi8IoBfMIiomLiAIWTiyCUspTKMeiwyIrSSsqycvNl6sNAIaEgAUT0sZn7IAEYMrUgAVWQa03Mm2Rb6bQAaSClIHFJqOiYWEQ5dA3kKEyIyYQdnV3cXF4fH56NsbHZBkRRLJLrAQcg+NUnuD4JBZMQCFdJPYAG6ybBoNAHXz+VAUL4AchokEYtD4qJIaG22wAAmQocIAJJdVRXMg0oiVSACITIS6iFBXNhiHnwLA4xBeG53HiDGiBSCcil4yAkIQUbbaFmsAC0+n8rjNBAxJjEcme1AwGF49hI1OhaL0FoYVBiiAwJDkGoQwjQRCaPJq522sAAypBSgRFKhbiQHXLKGsJUEQmFwpETrFhPF2vpDBRUIkUiME2Nsrl8tNwMBgHAkKhJQB5ADSPIEeuE6m1wjkjCIeKo2lKRBMkmIjBEMrL73owP80Zbi71i9kwkl7KlyBIoOO0SLCVaAH1PeXUJ3GLYADzxS4AImnr4AfB0a9Pxg2pnABpmzAbYlhWTBhAAJi2eYEElSUPWQFZhEEHdqF6HV9Ag-pLlsSBHD1al-QDSoCFoAJF1odCVDlBUvG2RCZWQxhBzEfll0oA5GBIDAaEQSD7CcFw3A8IERHhXN82ac8Sygm93krS52iSYDZjA5ZVmEABmWCYAACV3S51HuBhmHdDhEQGBhIFfViCDwehX3QklKKUHBdX2Mg8EOU8hFcRUyGCeYADElQAa3oHBpWo8kyCpXF8SwNAeTUDR+USQYqFacV23sfxyIYaVhBY1DUENTiK2sWxUUGPkZMUDV9N4eg8QIYz2JEHgOEi6LIHJRKCAJS5U22RzqSwcxvjakxXN1Mh+mQaVBWENQOFc1AsHtJCUIAQlzOaS20yAAF4EkgCxIFaIpm1bd8ymcyVJu0abZFmkFdsgW7FwQ1AVD4AcpoAzFLrImoTElF7Wre8BDtabTp1Oi9tIAbXuohXwAXRu9T5nArTIAAFj0ttJQwRBIowDyUHi6keDlalU0gVVIjRGrZC6N1a0xTwtMMAIxR+8r5hwRB6AwCtqGyegeAk-xmbtYQmYEfkvipzhxZEyBetQendyo6les9FBWG2L4uihVENr5dDyECy5MrMVoNU5fls2FQR6Fyn4Fo83mx35XrGNQKcym0DU21W+F7GxaEhGFIhGAD7Wos2+07a+VdvbkRNQXmUOZylIHJkxAAfTgqnB4KQFCOHCaRxJy9aGY7o-IuXuByBy7B7ztFhkEL0JxGzpLQm0Y-bGgA)

[[ts]]