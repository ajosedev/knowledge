# Overlapping content with CSS Grid

Rather than using `position: absolute`, using CSS Grid can be a great approach to overlapping content.

This way you don't give up the flow of the document - the contents of the elements still size how small or large they are. For example, the height of the parent will equal the max child height, rather than 0.

You can also use CSS Grid positioning like `align-items`, etc. rather than relying on `inset` or exact positioning with `top`.

```css
.parent {
	display: grid;
}

.child {
	grid-area: 1 / 1;
}
```

You can use other grid syntax for this, such as named grid columns/rows. https://mastery.games/post/overlapping-grid-items/

https://pqina.nl/blog/css-grid-position-absolute-alternative/

[[cssgrid]]