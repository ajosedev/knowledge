# Using multiple backgrounds in CSS

In [[css]], you can stack multiple backgrounds with the `background-image` (or `background`) shorthand property. They are layered with the first background you provide on top, and the last background in the back.

While you cannot use standard colours for these, you can workaround this by using linear-gradients.

This allows for a niche technique where you can layer a semi-transparent colour on top of a solid colour, to get the desired colour without the transparency. This can be useful if your netural colours are semi-transparent, but you need to overlay content.
https://blog.jim-nielsen.com/2019/applying-multiple-background-colors-with-css/
![[Pasted image 20260428101932.png]]

I also found https://blog.jim-nielsen.com/2025/background-image-opacity-css/, which might be handy in the future.

https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds