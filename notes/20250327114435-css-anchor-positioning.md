# CSS Anchor Positioning

Usually to position a popover or a menu, you'd have to use absolute positioning and then position the element using [[js]] transforms. CSS Anchor Positioning provides a native way of attaching elements positions to others. It also allows fallback positions for when there's not enough room for the preferred position, in a similar way to something like popper.js

- **Anchor:** This is the element used as a reference for positioning other elements, hence the _anchor_ name.
- **Target:** This is an absolutely positioned element placed relative to one or more anchors. The _target_ is the name we will use from now on, but you will often find it as just an “absolutely positioned element” in the spec.

There's quite a lot of functionality in the spec, allowing for multiple fallbacks, overflow behaviour, custom positioning, etc.

```css
.anchor {
  anchor-name: --my-anchor;
}

.target {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: start end;
  position-visibility: always;
  position-try-fallbacks:
    --my-custom-position,
    --my-custom-position flip-inline,
    bottom left;
}
```

https://css-tricks.com/css-anchor-positioning-guide/

[[css]]