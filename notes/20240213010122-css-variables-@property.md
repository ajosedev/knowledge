# @property with CSS Custom Properties

`@property` allows you to create supercharged [[20231101113023-css-variables]], adding type safety, default values, and defining inheritance. These rules are created in CSS - they don't require any JS. Although `registerProperty()` can be used in JS.

```css
@property --focal-size {
  syntax: '<length-percentage>';
  initial-value: 100%;
  inherits: false;
}
```

CSS has a bunch of type primitives, such as `<string>`, `<angle>`, `<flex>`, etc. which can be used for the `syntax` field. Custom properties will then not allow assignment to a value that does not match it's type - reverting to the last known good value.

https://nerdy.dev/cant-break-this-design-system

[[css]]
[[csshoudini]]