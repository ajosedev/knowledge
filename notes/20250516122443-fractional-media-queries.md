# Media queries and fractional viewports

When you zoom your browser, the actual viewport width can become fractional. This depends on a bunch of technical stuff, such as the difference between a real pixel and a CSS pixel. However the short story is that there's actually a decimal, even if `window.innerWidth` doesn't show it.

With common media query setups, this can mean a value falls through the gaps. Min-width and max-width correspond to the exact value, not inclusive up until the next digit. e.g. 767px = 767.0.

```css
@media only screen and (max-width:767px) {
	p {
	  background: red;
	}
}
@media only screen and (min-width:768px) {
	p {
	  background: green;
	}
}
```
At 767.5px, neither of these rules will apply. There's a slightly smaller than 1px gap (0.9999 repeating).

One mitigation strategy is to build a buffer into the queries itself, e.g. make the lower bound 767.98px, so the gap is now .02px large. This is what Boostrap 4 does.

Another more robust way is to use the new media query range syntax.
```css
@media (width <= 767px) { /* styles for viewports <= 767px */ }
@media (width > 767px) { /* styles for viewports > 767px */ }
```


The explanation from the spec is below.
https://www.w3.org/TR/mediaqueries-4/#mq-min-max
```

For instance, authors trying to define different styles based on a breakpoint in the viewport width using “min-” and “max-” would generally offset the values they’re comparing, to ensure that both queries don’t evaluate to true simultaneously. Assuming the breakpoint is at 320px, authors would conceptually use:

@media (max-width: 320px) { /* styles for viewports <= 320px */ }
@media (min-width: 321px) { /* styles for viewports >= 321px */ }

While this ensures that the two sets of styles don’t apply simultaneously when the viewport width is 320px, it does not take into account the possibility of fractional viewport sizes which can occur as a result of non-integer pixel densities (e.g. on high-dpi displays or as a result of zooming/scaling). Any viewport widths that fall between 320px and 321px will result in none of the styles being applied.

One approach to work around this problem is to increase the precision of the values used for the comparison. Using the example above, changing the second comparison value to 320.01px significantly reduces the change that a viewport width on a device would fall between the cracks.

@media (max-width: 320px) { /* styles for viewports <= 320px */ }
@media (min-width: 320.01px) { /* styles for viewports >= 320.01px */ }

However, in these situations, range context queries (which are not limited to “>=” and “<=” comparisons) offer a more appropriate solution:

@media (width <= 320px) { /* styles for viewports <= 320px */ }
@media (width > 320px) { /* styles for viewports > 320px */ }
```

https://stackoverflow.com/questions/70120238/do-i-consider-decimal-point-of-px-in-media-query

[[20201223162830-subpixel-rendering]]

[[browsers]]
[[css]]
[[responsivedesign]]