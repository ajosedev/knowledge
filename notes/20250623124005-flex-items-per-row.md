# Dictating flex items per row

It's not easy to dictate the amount of items in each flex row. You can use something like flex-basis or width on individual flex items, however you need to subtract the gap spacing. Otherwise the total amount of width will be greater than 100%.

```css
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.gallery img {
  flex: 1 1 calc(25% - 1rem); /* max 4 per row minus gap */
  max-width: 400px;
  width: 100%;
  height: auto;
  object-fit: cover;
}
```

Instead, CSS Grid seems like a better approach if you want to dictate the amount of items.

[[css]]
[[flexbox]]