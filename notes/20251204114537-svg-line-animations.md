# SVG Line Animations

You can use `stroke-dashoffset` and `stroke-dasharray` to create an animation where a SVG path looks like it's drawing itself.
Note that these are just a subset of SVG animations, which you can accomplish with things like [[20251205090111-css-transitions-animations]]. This is specifically for the 'line drawing'.

`stroke-dasharray` lets you specify the length of the rendered part of the line, then the length of the gap. This means that with a value that is half of the total path, half of the path would be visible, and half would be blank (the gap). With a value that is the length of the total path, you have a full visible line, and then the entire path again in a gap (which you can't see).

`stroke-dashoffset` lets you change where the dasharray starts. I like to think that it's 'backwards', in the sense that a positive value will remove the visibility from the end of the path (provided you have a dasharray that's the length of the path).

You can get the total length of a path with JS using `getTotalLength` on the `path` element.

To animate the path, find the length of the path and set the value for the dasharray AND dashoffset. Then transition the dashoffset value to 0, and the line will look like it's drawing.

https://jakearchibald.com/2013/animated-line-drawing-svg/
https://css-tricks.com/svg-line-animation-works/

[[animations]]
[[css]]
[[svg]]