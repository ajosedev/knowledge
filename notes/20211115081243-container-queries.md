# Container queries

Container queries are media queries that allow elements to be styled differently depending on the **available width of their container**, not the width of the viewport.

Container queries allows for creating components for context-independent layouts. Or worded differently, components can adjust based on where they are, not just the screen size.

```css
.parent {
	container-type: inline-size
}

@container (min-width: 40em) {
	.child {
		display: flex;
	}
}
```

>**The golden rule with container queries is that we can’t change what we measure.** `container-type: inline-size` lets us use `min-width`/`max-width` conditions in our container queries, but not `min-height`/`max-height`.

By default the `@container` rule matches _any_ container. `container-name` can be used to define a matching container. Note that `container` acts as a short hand for both `container-name` and `container-type`.

```css
.parent {
  container-name: cards-grid;
  container-type: inline-size;
}

/* This matches the .parent container */
@container cards-grid (width > 800px) {
  article {
    display: flex;
  }
}
```

There are also special container query length units here: https://developer.mozilla.org/en-US/docs/Web/CSS/length#container_query_length_units

Container queries use the `contain` API under the hood, which is a bit more complex and effectively works as instructions to the browser of what it needs to calculate, and what it doesn't. It's  an optimisation API.

https://css-tricks.com/css-container-queries/
https://www.joshwcomeau.com/css/container-queries-introduction/

[[css]]
[[intrinsiclayout]]
[[responsivedesign]]