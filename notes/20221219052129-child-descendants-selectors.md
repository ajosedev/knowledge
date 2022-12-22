# Child selectors vs descendant selectors

All children are descendants, but not all descendants are children.
A child element is the **direct** descendant.

In the following example, `ul` is a child and a descendant, but `li` is only a descendant.
```html
<div>
	<ul>
		<li>One</li>
		<li>Two</li>
	</ul>
</div>
```

In CSS, `div p` selects descendants, where `div > p` selects children.
[[20220829104803-css-combinators]]

[[css]]
[[html]]
[[js]]