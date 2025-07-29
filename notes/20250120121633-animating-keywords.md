# Animating to keywords

A key issue with animations/transitions in [[css]] is being unable to animate to `height: auto`. However with the new `interpolate-size` property, it's now possible!
```css
.example {
  height: 1lh;
  overflow-y: clip;

  transition: height 1s;
  interpolate-size: allow-keywords;
}

.example.opened {
  height: auto;
}
```

This can be used to animate to any keyword, such as `fit-content`, `max-content`, etc.

[[animations]]
[[css]]