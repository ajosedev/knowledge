# Sizing images & layout shifts

We've gone full circle, and the `height` and `width` [[html]] size attributes are useful again. Back in the day they were used for styling images to a specific size, but now with [[responsivedesign]] we don't do that anymore.

Assuming you're styling your image with some responsive values (e.g. `100%`, `auto`, etc), the browser does not know what aspect ratio your image is. As such, it can't reserve any space, leading to a large layout shift ([[20221219125527-web-vitals]]) once the image is loaded.

Adding a `height` and `width` alleviates this problem. The browser uses to calculate the aspect ratio of the image PRIOR to it being loaded, and reserves the appropriate space.

Once the image is loaded, your CSS takes effect, styling the image is necessary based on the loaded images. This means you can reserve a 16/9 ratio, but load a square image, if you'd like.

[[20211117084255-css-aspect-ratio]] is an alternative way of solving this problem. Setting an explicit aspect-ratio will also appropriately reserve the space. Under the hood, the browser effectively uses this property with `attr(width) / attr(height)` to reserve space until the image is loaded.

However there's one crucial difference! `aspect-ratio` will force the given ratio even once the image loads with its own inherit aspect ratio. Most of the time this is okay, but if you're creating a component or similar, the subtle difference can matter.

Note that in theory you can express the size attributes as the smallest fraction you can. Be cautious with this, as if your CSS loads your image may end up being 16px x 9px. Pick sane values, but they don't have to be perfect.

tl;dr:
1. use size attributes to help reserve space if you want to ultimately rely on the image's aspect ratio
2. alternatively use `aspect-ratio` if you're okay to also force the image into an aspect ratio once loaded

https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img
https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/
https://www.tempertemper.net/blog/using-image-aspect-ratios-to-avoiding-janky-page-loading

[[browsers]]
[[css]]