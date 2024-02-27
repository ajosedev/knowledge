# CSS variables flow down only

Remember that CSS variables flow down from the parent to the child only. This includes CSS variables that reference other ones.

```css
:root {
  --c1: red;
  --c2: blue;
  --grad: linear-gradient(var(--c1),var(--c2);
}
.box {
  --c1: green;
  background:var(--grad);
}
```

The above snippet creates a linear gradient of `red, blue`, not the desired `green`.
As the calculation is done above the variable changing, it has no effect.

https://dev.to/afif/what-no-one-told-you-about-css-variables-553o#9-they-only-work-from-parent-to-child

[[css]]