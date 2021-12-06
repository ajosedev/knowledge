# HTMLElement and other element types

All HTML interfaces extends from the base `HTMLElement` interface. This means there's a separate interface for `HTMLAnchorElement`, `HTMLButtonElement`, `HTMLOptionElement`, etc.

However there's a few elements that don't have their own interface, because they have no additional requirements.

> The basic interface, from which all the HTML elements' interfaces inherit, and which **must be used by elements that have no additional requirements**, is the `HTMLElement` interface.
https://html.spec.whatwg.org/multipage/dom.html#elements-in-the-dom

That's why there's no `HTMLNavElement`, `HTMLAsideElement`, and more.

[[html]]
[[ts]]