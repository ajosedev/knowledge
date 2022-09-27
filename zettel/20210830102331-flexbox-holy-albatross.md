# The Flexbox Holy Albatross

Going from X boxes in a row, to a single column at a specified width. The width is based on the size of the element, not the size of the screen.

![[Holy albatross.png]]

The following CSS snippet switches the row to be stacked vertically when the container's width is lower than the first value in the `--modifier` value (`40rem`). Note that `margin` can be replaced with `gap`, if possible.

```css
.container {
  display: flex;
  flex-wrap: wrap;
  --margin: 1rem;
  --modifier: calc(40rem - 100%);
  margin: calc(var(--margin) * -1);
}

.container > * {
  flex-grow: 1;
  flex-basis: calc(var(--modifier) * 999);
  margin: var(--margin);
}
```

Because `flex-grow` is proportional, it's possible to make certain items larger than others, using something like:

```css
.container > :nth-child(2) {
  flex-grow: 3;
}
```

https://heydonworks.com/article/the-flexbox-holy-albatross/
https://heydonworks.com/article/the-flexbox-holy-albatross-reincarnated/

Every layout calls this the 'Switcher' layout.

[[css]]
[[intrinsiclayout]]
[[layout]]
[[responsivedesign]]