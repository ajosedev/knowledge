# :has selectors based on amount of children

Using [[20210816101731-css-has]], you can style a parent based on the amount of children it has. Different queries exist for different amounts.

For exactly 0 children, use:
```css
.container:not(:has(*)) {}
```

For exactly 1 child, use:
```css
.container:has(> :only-child) {}
```

For exactly 3 (or any other number), use:
```css
.container:has(> :last-child:nth-child(3)) {}
```

If you want to select 'at least' n elements, simplify remove the `:last-child` part, e.g:
```css
.container:has(> :nth-child(3)) {}
```

For 'at most', use:
```css
.container:has(> :last-child:nth-child(-n + 3)) {}
```

Ranges are a bit more complicated, but follow the following pattern (e.g. 2 and 5):
```css
.container:has(> :nth-last-child(2):nth-child(-n + 4)) {
```
The first number is the start value, and the second number is the start value -1, hence `4` in the above example.

There's also `:empty`, which is a pseudo-class that represents any element that has no children: https://developer.mozilla.org/en-US/docs/Web/CSS/:empty
`:only-child` is similar.

Previously this was a lot more difficult and required some trickery like https://alistapart.com/article/quantity-queries-for-css/

Keywords: 'quantity queries'

https://css-tip.com/number-elements-has-selector/
https://css-tip.com/quantity-queries/

[[css]]