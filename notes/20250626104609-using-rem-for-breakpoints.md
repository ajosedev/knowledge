# Pixel breakpoints and zooming

Breakpoints are often set using `px`. This works decently well, and even properly supports zooming in. WCAG rules are often tested at 320x256px (https://www.w3.org/WAI/WCAG21/Understanding/reflow#why-specifically-320px-and-256px), which does work with browser zoom.

However this implementation doesn't support if a user increases their base font size. The breakpoint is still based on pixels, but the content is now much larger. Leading to overlapping text, too many columns, unusable components, etc.

Using `rem` or `em` for breakpoints helps solve this, and better supports WCAG 1.4.4 and 1.4.10.

Going further, there's also the idea that using breakpoints at all is a bit outdated (#todo - [[intrinsiclayout]])

[[20211115081243-container-queries]]
[[20250516122443-fractional-media-queries]]

https://blog.damato.design/posts/font-size-dimensions/

[[a11y]]
[[browsers]]
[[css]]
[[responsivedesign]]
