# stretch in CSS

`stretch` now exists as a keyword for width/height.

The `stretch` keyword is a keyword for use with CSS sizing properties (such as `width` and `height`) that lets elements grow to exactly fill their containing block's available space.

It’s similar to `100%`, except the resulting size is applied to the [margin box](https://web.dev/learn/css/box-model#areas) of the element instead of the box determined by `box-sizing`.

This lets the element take up the available space without overflowing, especially when margins or padding are in use.

`box-sizing: border-box` works around padding and border, but it doesn't work around margin (as it's outside of the border in the box model). `stretch` works on a level above that, and thus fixes all three. Similar to how [[flexbox]] works.

https://css-tricks.com/we-completely-missed-width-height-stretch/

[[20220801123109-css-box-model]]

[[css]]