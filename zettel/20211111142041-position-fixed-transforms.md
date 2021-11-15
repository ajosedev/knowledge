# Position fixed & transforms

`position: fixed` removes the element from the normal document flow, and it is positioned relative to the initial containing block established by the viewport.

However if one of its ancestors has a `transform`, `perspective`, or `filter` property set to anything other than `none`, that ancestor becomes the containing block.

Note that `fixed` always creates a new stacking context.

#css