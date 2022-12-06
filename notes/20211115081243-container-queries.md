# Container queries

Container queries are media queries that allow elements to be styled differently depending on the **available width of their container**, not the width of the viewport.

Container queries allows for creating components for context-independent layouts.

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
[[intrinsiclayout]]
[[responsivedesign]]