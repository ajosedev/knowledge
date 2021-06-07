# CSS Logical Properties

Logical properties provide the ability to control layout through logical direction and dimension mappings, rather than hard-coded physical (top, right, bottom, left) mappings. This change moves us away from the physical properties of a screen, and allows us to make more flexible CSS.

`Inline` is the dimension parallel to the flow of text (default horizontal)
`Block` is the dimension perpendiuclar to the flow of text (default veritcal)

An example would be `margin-inline-start`, this is effectively `margin-left` when working with LTR writing modes, but for RTL writing modes, would apply margin on the right side of the screen.

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties

#css