# Quasi-private fields in JS

These aren't as good as [[20210816112700-private-class-syntax-js]], but can fill a niche. In particular, making a semi-private prop in an interface for a [[react]] component.

This is a common want in design systems, as they often have internal exceptions that don't exist for consumers. Usually, a prop that is dangerous and needs to be handled with care.

```ts
type Props = {
	tooltip: string;
	hideTooltip?: boolean; // ideally this is private
}

function ButtonWithTooltip(props: Props) {}
```

There's not great way to make the `hideTooltip` prop private. We can extend the type and make an `InternalProps`, but then the component needs to also use it, making it effectively pointless.

```ts
type Props = {
	tooltip: string;

}
type InternalProps = Props & {
	hideTooltip?: boolean; // ideally this is private
}

function ButtonWithTooltip(props: InternalProps) {}

// <ButtonWithTooltip tooltip="Hello" hideTooltip /> is valid
```

The key factor here is using Symbols: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
Symbols are guaranteed to be unique. The same string does not create an equal symbol:
```js
const symbolA = Symbol('uniqueKey');  
const symbolB = Symbol('uniqueKey');  
console.log(symbolA === symbolB); // false
```

Using this, you can add a property to a type or interface that corresponds to a symbol. That instance of a symbol is the only thing that is equivalent to the prop.

```ts
const INTERNAL_HIDE_TOOLTIP = Symbol('hideTooltip'); // Not exported, but used internally across files
const EXTERNAL_HIDE_TOOLTIP = Symbol('hideTooltip'); // A user trying to re-create the symbol

const TEST = Symbol('internalFlag')

type Props = {
  tooltip: string
}

// Still use internal copy to keep the exports 'clean'
type InternalProps = Props & {
  [INTERNAL_HIDE_TOOLTIP]?: boolean
}

// This would be JSX, but written in TS to test execution
function Component(props: InternalProps) { console.log(props.tooltip, !!props[INTERNAL_HIDE_TOOLTIP]) }

Component({ tooltip: 'Standard' })
Component({ tooltip: 'Internal usage', [INTERNAL_HIDE_TOOLTIP]: true })
Component({ tooltip: 'Does not work', INTERNAL_HIDE_TOOLTIP: true })
Component({ tooltip: 'Does not work', [EXTERNAL_HIDE_TOOLTIP]: true })

```
[TS Playground](https://www.typescriptlang.org/play/?#code/MYewdgzgLgBAkgOQCoFEBKCCCAZA+gCTgBEVckB5c7JOABRgF4YBlATwFsAjEAGwAoA5AAsAlgBMApkhC8oIgA4CAlAG4YAenUwEIWBIAe8kACcoEsQChQkWCgAaqDDgLFSFKjXpM2XXoNGS0rIKymqaMJgwAK4QEsYwUMasImAA5gkgMMYSALTA2QCGZglCEjAQHNw8Flbg0DCozEiMLJV+AilmxmAFPABiPAWpyjVQrPJltMYg8hAtAN4WMBnB8gBc5YkpqRYAvjXhzHI8PNGxMJ1xPaeg8qwZMADWEhLyJWUGRqZzAsA8EgUwAILGMJvAwF1rlMZnMmNDZjAAGQwRbLADaiEcWDwhBIZEo1DoAF0APwbbi8AFgPY1ABmUTAwDk4BgAGEQOwjGAJBC+PJprMNnAIVdevCIEoUTBrBBKQA6HggVJ8gUQOVQGQ8OTyAA0MAAhPr+TCMch0NiXHj3ITaETJfsLOzOeAeVA+PMVlqFBsBEdAWICsYxAIYLslI6OVzXe7PdqfcLIb0zkMJAI9aasc5cW4CZ4iRtElEymGI87ubyPRrVj6iCAJHMwLoYAB3EyPNPwM1OHGufEeOgF4xF0Php1Riux70wAS1+swRuwVvGdvp+yZntW3PEwfDktAA)

The same can be done for regular JS Objects, not just Typescript types.

This isn't truly private though, so use it with caution. You can get this through things like `Object.getOwnPropertySymbols`. However it's definitely an improvement and is decently abstracted away.

Note in React, there's a chance that this is stripped if React tries to 'normalize' your props, but I cannot confirm yet.

https://mitya.uk/articles/using-symbols-private-properties

[[designsystemapi]]
[[js]]
[[ts]]