# Optional properties vs undefined union in Typescript

Marking a property as optional is not the same as having a property's type as a union with `undefined`.

```ts
export function composeName(firstName: string, lastName?: string)
// vs
export function composeName(firstName: string, lastName: string | undefined)
```

The former marks the second parameter as optional. Users may not know of its existence or think it's required.
The latter requires two argument be passed to the function, although the second argument can be `undefined`.

Both have different intents, and work in different situations.

This can be helpful when you want to either accept an argument or fall back to a default. If the parameter is optional, users may not know they even have the option.

[[ts]]