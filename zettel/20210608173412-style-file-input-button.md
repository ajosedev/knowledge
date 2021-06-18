# How to style the file input button

There's actually a CSS psuedo-element for this purpose: `::file-selector-button`. This targets the common 'Browse' button you see when rendering a `<input type="file" />`

Note that some browsers may use a `-webkit` prefixed variant.

https://developer.mozilla.org/en-US/docs/Web/CSS/::file-selector-button

#css