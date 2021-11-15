# Subpixel rendering

If animations are too slow in Firefox (and other non-webkit browsers), they appear to do so some sort of pixel snapping, which makes the animations look jerky, as if they have individual 'steps'.

The fix is to add a tiny rotation, which makes the animation smooth. Although, this may have the undesired effect of making text look blurry as it moves.

[https://bugzilla.mozilla.org/show_bug.cgi?id=739176](https://bugzilla.mozilla.org/show_bug.cgi?id=739176)

[[css]]
[[animations]]
[[browsers]]
