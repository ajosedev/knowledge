# OffsetWidth, ScrollWidth, ClientWidth, etc.

These 3 read-only attributes represent the current visual layout, all of them integers and having their respective pairing for heights.

`offsetWidth`
Effectively how much room the element takes up.
Size of the visual box including all borders. Calculated by adding width, paddings, and borders if the element is block-displayed.
This is usually the values returned by `getBoundingClientRect`

`clientWidth`
Effectively the size of the displayed content.
Visual portion of the box content, not including borders or scrollbars but included padding.

`scrollWidth`
Effectively the actual size of the content, regardless of how much is currently visible.

![[Element width measurements.png]]

[[html]]
[[js]]
[[layout]]