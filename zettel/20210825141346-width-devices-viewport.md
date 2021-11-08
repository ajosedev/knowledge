# Width vs device-width, and responsive design

A meta viewport tag gives the browser instructions on how to control the page's dimensions and scaling. To attempt to provide the best experience, mobile browsers render the page at a desktop screen width (usually about `980px`, though this varies across devices), and then try to make the content look better by increasing font sizes and scaling the content to fit the screen. This leads to inconsistency across devices, where users will have to pan/zoom/etc.

Using the following snippet, the page will match the viewport width to the screen's width in device-indepdendent (i.e. ignoring pixel density) pixels. 
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Adding the value `initial-scale=1` instructs browsers to establish a 1:1 relationship between CSS pixels and device-independent pixels regardless of device orientation, and allows the page to take advantage of the full landscape width.

The `device-width` of a device refers to these device-independent pixels, and is what CSS uses for its pixels. e.g. a Galaxy Note 10 will have a device-width of 740.
However this device-width is inconsistent on how it deals with orientation, and definitely doesn't deal with scale, resizing, etc. This means a desktop browser's device-width matches the monitor size, not the browser size.

For this reason it's better to use `width` when dealing with @media queries, as it refers to the width of the target display area, e.g. the browser itself. When using the 'Responsive Design Mode' in Firefox for responsiveness testing, this will modify the `device-width`, when resizing the browser width, only the `width` will change.

`device-width` has now been deprecated in `@media` rules.

https://web.dev/responsive-web-design-basics/
https://www.mydevice.io/

#css