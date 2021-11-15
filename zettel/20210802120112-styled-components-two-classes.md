# Why styled components uses two classes

One class is **static** per component, which is consistent across all elements of a styled component. This doesn't have any styles attached to it. This is prefixed with `sc` and is used for component selectors (referring to another component) among other things.

The other class is **dynamic**, and is different for every element of your styled component with different props, based on what the interpolations result in. This houses the necessary styling, even the styles that don't change based on props.

https://styled-components.com/docs/faqs#why-do-my-dom-nodes-have-two-classes

[[css]]
[[cssinjs]]