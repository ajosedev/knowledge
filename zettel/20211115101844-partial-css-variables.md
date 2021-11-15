# Partial CSS Variables

CSS variables are helpful for partial property overwrites also, they don't need to store complete values. For example:

```css
button {
    box-shadow: inset 0 -2px 5px var(--bs-color)
}
```

```css
button {
    --rgb: 13, 132, 255;
    background-color: rgba(var(--rgb), 0.75)
}
```

[[css]]