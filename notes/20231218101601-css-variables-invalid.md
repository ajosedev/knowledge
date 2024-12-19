# CSS variables make invalid statements valid

Typically, CSS ignores invalid rules and instead falls back to known valid rules. The following will render a box with a red background, due to the typo:
```css
.box {
  background: red;
  background: linaer-gradient(red, blue); /* typo in 'linear' */
}
```

CSS variables change that. As they are calculated at 'computed-value time', the browser assumes that rules containing a CSS variable are valid, until it knows otherwise.

This means that invalid code can be used, and the fallback to known valid rules does not occur. The following will render a box with a transparent background, as it has no valid background rule after evaluation:
```css
.box {
  --color:red;
  background: var(--color);
  background: linaer-gradient(var(--color), blue); /* typo in 'linear' */
}
```

https://dev.to/afif/what-no-one-told-you-about-css-variables-553o#3-they-can-make-an-invalid-value-valid

Similarly [[20230728020610-grouping-selectors-browser-invalid]]

[[css]]