# Selecting the first n items in CSS

To make the first 5 list items bold:
```css
li:nth-of-type(-n + 5) { font-weight: bold; }
```

Start with the amount of items to impact, then increment backward with `-n`.

[[20220627094238-selecting-range-n-items-css]]

[[css]]