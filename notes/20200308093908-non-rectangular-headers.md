# Creating non-rectangular backgrounds in CSS

There are several ways to create a non-rectangular background.

Inline SVGs are simple and easy.
If you want a consistent *angle*, use `vw` for the SVGs height.
If you want a consistent *height* differential, use `px` for the SVGs height.

Alternatively, `clip-path` can be used, following the same angle/height consistency unit mapping.

When dealing with curves, `border-radius` can be used, especially with its less often used 8 unit syntax.

`transform: skew` can also be used, but keep in mind that it will skew child elements also.

https://css-tricks.com/creating-non-rectangular-headers/

[[20250717104447-css-clip-paths]]

[[css]]
[[design]]