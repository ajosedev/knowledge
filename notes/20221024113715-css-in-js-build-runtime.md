# Build-time vs Runtime CSS-in-JS

Broadly speaking, there are two different types of CSS-in-JS libraries. Those that process the CSS at build-time, and those that process the CSS at runtime. The latter are more common, in libraries like `styled-components` and `emotion`. The former is becoming more popular through libraries like `vanilla-extract` and `linaria`.

The goal of build-time CSS-in-JS is to get all the main benefits of CSS-in-JS, without the additional performance overhead. [[20221024114842-css-in-js-basics]]

There's some middle-ground in between these types of libraries. Some of them are mostly build-time (or compile-time), but still require some work at runtime. Usually for inserting styles on render through class names. Zero-runtime libraries aim to produce plain CSS before it gets to the browser, so no JS is required at all.

There are strategies to write your CSS-in-JS in a manner that makes it easier to convert them into a build-time library. Effectively, write them in a non-nested, independent, uncomposed manner - similar to CSS modules.
See https://douges.dev/blog/taming-the-beast-that-is-css-in-js for more info.

[[css]]
[[cssinjs]]
[[performance]]