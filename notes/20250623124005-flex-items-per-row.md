# Dictating flex items per row

It's not easy to dictate the amount of items in each flex row. You can use something like flex-basis or width on individual flex items, however you need to subtract the gap spacing. The gap affects the available space for items. If you do not subtract the gap spacing, the total amount of width will add up to greater than 100% (assuming you're using percentage widths), causing wrapping.

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

Instead, CSS Grid seems like a better approach if you want to dictate the amount of items. However this is often more difficult if you need the items to wrap.

If you don't want to dictate the amount of items, the relationship between flex and gap can be slightly annoying. The best workaround I've found is [[20251126040037-negative-margin]]

https://github.com/w3c/csswg-drafts/issues/5399
https://wiryawanadipa.com/blog/calculate-percentage-width-of-flex-items-when-using-gap/

[[css]]
[[cssgrid]]
[[flexbox]]