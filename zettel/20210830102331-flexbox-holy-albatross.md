# The Flexbox Holy Albatross

The problem to solve here is having a single row of horizontal elements switch to a single column of vertical elements, without any one element wrapping individually. This also should be done without media queries, or using JS.

The following CSS snippet switches the row to be stacked vertically when the container's width is lower than the first value in the `--modifier` value (`40rem`).

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

[[css]]
[[intrinsiclayout]]
[[layout]]
[[responsivedesign]]