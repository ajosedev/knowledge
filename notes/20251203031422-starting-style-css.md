# CSS @starting-style

The CSS `@starting-style` at-rule allows us to define styles for elements just as they are first rendered in the DOM.

This can be helpful for things like `dialog`. As mentioned in [[20251205090111-css-transitions-animations]], transitions need a before-change styles and after-change styles. `@starting-style` lets you set a before-change styles on elements that have just rendered.

```css
@starting-style {
  dialog[open] {
    opacity: 0;
  }
}
```

Note that there's a slight gotcha, where the specificity of `@starting-style` is different to that of keyframes. https://www.joshwcomeau.com/css/starting-style/

https://css-tricks.com/almanac/rules/s/starting-style/

[[css]]