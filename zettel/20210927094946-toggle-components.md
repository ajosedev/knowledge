# Toggle components

Also known as 'switch'.

There's two main ways of tackling creating accessible Toggle/Switch components.

## aria-pressed

Using a `button` as the base element, toggle betweeen `aria-pressed="true/false"` as the user clicks the button with JS. This is probably the simplest imlpementation, and informs browsers that it's a button while maintaining the base a11y of a `button`.

## aria-checked/role="switch"

The other method involves using `role="switch"` or `aria-checked`. `role="switch"` is fairly new, and represents a type of checkbox with on/off values, rather than checked/unchecked values. This must be used in conjunction with `aria-checked`.

This role can be applie to a `button` base similar to the previous method, or it can be applied to a `checkbox`, `a`, or anything else really. Keep in mind progressive enhancement, and it's probably best to use a `button` or `checkbox`.

[[a11y]]
[[components]]
