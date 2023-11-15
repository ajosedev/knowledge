# Cyclic CSS variables

CSS variables can easily be broken by a cycle in the dependency graph.

With a working CSS variable, it can be used at the level you set it, and any of it's descendants. This means you can re-assign the variables to other values, or even other variables. However if a CSS variable is assigned to itself (even through a chain of other variables), it will cease to work. This includes for the current level, and any descendants.

>If there is a cycle in the dependency graph, all the [custom properties](https://www.w3.org/TR/css-variables-1/#custom-property) in the cycle are [invalid at computed-value time](https://www.w3.org/TR/css-variables-1/#invalid-at-computed-value-time).

In the following example, anything at the `.parent` level or below does not have the correct colour.
https://codepen.io/ajosedev/pen/eYxzvXR
```html
<div class="app">
	<p>Top-level app text</p>
	<div class="parent">
		<p>Parent text</p>
		<div class="child">
			<p>Child text</p>
		</div>
	</div>
	<div class="sibling">
		<p>Sibling text</p>
	</div>
</div>
```

```css
:root {
	--border-color: darkcyan;
	--color: darkcyan;
}

.parent {
	--color: var(--color)
}

p {
	border: 1px solid var(--border-color);
	color: var(--color);
}
```

[[css]]