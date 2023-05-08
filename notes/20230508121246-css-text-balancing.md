# CSS text balancing

When centering text with CSS, you often run into a sub-optimal output where only a single word is placed on a new line. [[20210201145101-widows-orphans]]. This leaves the text feeling unbalanced, and usually is against the designer's wishes.

This can be fixed with a new `text-wrap` value:
```css
text-wrap: balance
```

 `max-width` can aid in this problem, but is not a proper fix as the text may change in size, wording, i18n, etc

[[css]]
[[design]]