# Container queries

Container queries are media queries that allow elements to be styled differently depending on the **available width of their container**, not the width of the viewport.

This works excellently for components which often have encapsulated requirements based on their context.

```css
.parent {
	contain: layout inline-size
}

@container (min-width: 40em) {
	.child {
		display: flex;
	}
}
```

[[css]]
[[responsive-design]]