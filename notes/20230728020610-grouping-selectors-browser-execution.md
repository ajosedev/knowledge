# One invalid selector breaks the entire group

One quirky thing with [[css]], is that an invalid selector means the entire block isn't executed, even for comma separated selectors.

This is especially important considering [[browsers]] support. Using a newer technology like `:focus-visible` chained with a older standard selector like `div`, may break the entire thing.

>Browsers ignore entire selectors if it doesn’t understand any part of them

e.g. the following selector doesn't execute anything in Firefox, which currently doesn't support [[20210816101731-css-has]]
```css
*, *:has(+ p) {
	background: red;
}
```

Note this is rule is for selectors. Having an unknown rule/property only ignores that single property.

https://css-tricks.com/dont-comma-separate-focus-within-if-you-need-deep-browser-support/
https://css-tricks.com/one-invalid-pseudo-selector-equals-an-entire-ignored-selector/

[[browsers]]
[[css]]