# CSS Relative Colors

Simply put, these are native solutions to colour-related functions that were only present in CSS preprocessors until now.

It lets you generate a colour that's relative to another colour.

To use relative colours, we need to specify the following:
- Color function
- Origin colour (can be a [[20231101113023-css-variables]])
- Channels
- Alpha (Optional)
```css
color-function(from origin-color channel1 channel2 channel3 / alpha(optional))

border-color: rgb(from #000 r g b / 0.1);
```

You can use `calc` to modify one of the colour channels, e.g. to add lightness in the `hsl` colour space:
```css
background-color: hsl(from #9333ea h s calc(l + 10));
```
You can use other colour spaces like [[20230508124011-oklch]] to hue shift while maintaining lightness and chroma.
```css
background-color: oklch(from var(--brand-1) l c calc(h + 90));
```

>When using relative colors, the computed color for `hsl()` remains in the `sRGB` color space. But for new color spaces like `lch()` and `oklch()`, the computed color remains in their color space.

Some use cases and common tasks for relative colours:
- Changing opacity or alpha
- Creating a gradient fade
- [[20220822094537-themeable-design-systems]] - creating colours from a single accent color
- Coloured shadows
- Darken/lighten colours
- Hue shifting
- Programmatic colours for [[designsystem]]
- Complementary colours

Something like [[20240926102743-color-mix]] can be used as a fallback, or a slightly different API.

https://ishadeed.com/article/css-relative-colors
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Relative_colors

[[css]]
[[design]]