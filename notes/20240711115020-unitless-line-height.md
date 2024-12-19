# Line heights should be unitless

As a rule, always use unitless line heights.

Unitless line heights are not the same as percentage line heights, e.g. these are different: `1.5` & `150%`.

When using line heights that have a unit, the line height is calculated at its declaration, and then children inherit that calculated, fixed value.
If the value is unitless, the line height is calculated for each element, taking into account the font size.

http://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/

```html
<ul>
  <li>Content</li>
  <li><small>Small content</small></li>
</ul>
```

```css
ul {
  font-size: 16px;
  line-height: 100%;
}

li {
  font-size: 12px;
  /* line-height here is still 16px. */
  /* If the ul line-height was just `1`, this would instead be 12px. */
}

small {
  font-size: 10px;
}
```

[[css]]
[[typography]]