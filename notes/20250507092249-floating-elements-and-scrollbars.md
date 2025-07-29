# Positioning floating elements regardless of scrollbar existence

This is a bit tricky, as it depends exactly what you're positioning.

Some cases can use margin: `0 auto` as normal, other times you'll need a wrapping container, etc.

One thing you can do that helps across solutions is to use something like:
```css
right: calc(50px - (100vw - 100%))
```

`100vw` is the viewport width, **including** scrollbar
`100%` is the width of the content area, **excluding** scrollbar
**Thus, 100vw - 100% - width of the scrollbar** - this is the magic of any of the solutions.

You can adjust the `50px` offset as necessary.
Note: for setting `left`, you might have to add the offset to the calculation, not subtract.

---

This modified approach worked on something I was trying elsewhere:
```css
left: 'calc(50% + (100vw - 100%) / 2)';
transform: 'translateX(-50%)';
```
Which I think translates to `left: 50vw`.

This means that the component will be centered to the area that includes the scrollbar, which sometimes looks slightly off, but is stable.

---

Another approach is to use `scrollbar-gutter: stable` on the `html` or `body` element. This always reserves space for the scrollbar, meaning floating elements won't shift and calculations like `left: 50%` are stable.

https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter

---

`react-aria` actually does a different hack, adding `padding-right: 15px` when disabling overflow (and thus the scrollbar) when opening things like modals.

[[css]]