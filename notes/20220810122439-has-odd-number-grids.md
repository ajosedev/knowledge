# Using :has with odd numbered grids

Grids with an odd number of children have always been tricky to deal with. The last item often sits on its own row, or is misaligned to the rest of the columns (e.g. centred).

Historically, you haven't been able to meaningfully target this last item. Meaning that it's behaviour is left up to the behaviour of the layout mode, flex or grid.

```css
.items {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 5vw;
}

@media (max-width: 800px) {
	.items {
    grid-template-columns: 1fr 1fr;
  }
	
	.items:has(.item:last-of-type:nth-of-type(odd)) .item:last-of-type {
		grid-column: 1 / -1;
	}
}
```

Note that `auto-fit` over `auto-fill` is important here to avoid creating 'ghost columns'. [[20210510154638-grid-auto-fill-fit]]

The last selector is where the magic happens
```css
.items:has(.item:last-of-type:nth-of-type(odd)) .item:last-of-type {
	grid-column: 1 / -1;
}
```

This selector selects the grid where the last item is odd, and then targets the last item (or whatever you choose) to be full-width.
The selector can be adapted as needed, as the `:has` is doing the work of finding what state the grid is in, but what you style can realistically be anything.

https://daverupert.com/2022/07/solving-the-dangler-conundrum-with-has-and-container-queries

[[20210816101731-css-has]]

[[css]]