# Masking vs clipping in CSS

Both accomplish similar goals of modifying images or shapes, but there's subtly different
- Masks are images; Clips are paths.
- Clips are much simpler for cutting out shapes
- Masks let you do alpha transparency
- Masks let you do gradients
- Anecdotally, masks are better for 'crazier' stuff that is more complicated than a shape cutout, such as concentric circles

I like to think of a mask as an overlay, which can cut things out with transparency, but clip paths are a much simpler vector cut out tool.

>When you [clip an element](https://web.dev/articles/css-clipping) using the `clip-path` property the clipped area becomes invisible. If instead you want to make part of the image opaque or apply some other effect to it, then you need to use masking

[[20250717104455-css-masks]]
[[20250717104447-css-clip-paths]]

[[css]]