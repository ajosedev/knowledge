# Background repeat

Some lesser known properties for `background-repeat`:

* `space`: tile the image in both directions. Never crop the image unless a single image is too large to fit. If multiple images can fit, space them out evently images always touching the edges.
* `round`: tile the image in both directions. Never crop the image unless a single image is too large to fit. If multiple images can fit with leftover space, squish them or stretch them to fill the space. If it’s less than half one image width left, stretch, if it’s more, stretch.

[[css]]