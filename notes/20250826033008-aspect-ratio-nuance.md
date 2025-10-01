# Aspect ratios and image sizing

Image sizing is complicated, and things like [[flexbox]] and [[20211117084255-css-aspect-ratio]] makes it a bit more complex too.

By default images take up the space of their natural dimensions. Usually something like `width: 100%` is added, and `max-width` can be added to restrict the total size. This keeps the native aspect ratio of the image itself. Note that height can be used as a dimension too if that's the preferred restriction.
	Note that when doing this, the image does not reserve space for itself before loading.  [[20250528114703-image-layout-shift-aspect-ratio]] can be updated to help with this

`aspect-ratio` can help with this, but there's nuance on what you put the aspect ratio on. Then there's further nuance about how it works with properties like `object-fit`, or in some cases `border-radius` (at least visually).

Assuming you apply aspect ratio to the image itself, it will style the `img` elements 'bounding box'. This means the actual element will take up that much space, regardless of how the visual image is displayed. Often when combining this with something like `object-fit: contain`, it means the visual image and `img` element have different dimensions. This in turn means that adding something like `border-radius` to the `img` itself, has no visual change. It's rounding the element, not the image.

A different approach is to use something like flex. If you place an image in a flex container and give the container an aspect ratio, the image will keep its natural aspect ratio within that container. By default the image will grow to fill the container, but you can center the image as needed with `justify-content` and `align-items`. This in turn keeps the `img` element and visual image 1:1, while respecting any other sizing rules. This may need things like `max-width: 100%` on the image, as you're now sizing the image in two ways, its container, and the image itself.

Different `object-fit` values can be helpful here, e.g. using `none` to reduce the size of the image, or `contain` to keep the image aspect ratio, as the default is `fill`.

https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
https://codepen.io/ajosedev/pen/QwjZRxE

[[css]]
[[design]]