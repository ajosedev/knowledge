# Gradients to transparent in Safari

For whatever reason, gradients that use `transparent` in Safari will incorporate black into it, almost as if it's a 'transparent black'.

To fix you need to get a transparent version of the original colour, which isn't always possible.

Although it eventually fades to transparent, the `rgba` value is incorporated into the gradient. Meaning the following appear differently in Safari:
```css
background: linear-gradient(red, rgba(0, 255, 0, 0));
background: linear-gradient(red, rgba(0, 0, 255, 0));

/* These two are the same, slightly black */
background: linear-gradient(red, transparent);
background: linear-gradient(red, rgba(0, 0, 0, 0));
```

https://css-tricks.com/thing-know-gradients-transparent-black/
https://bugs.webkit.org/show_bug.cgi?id=150940

[[browsers]]
[[css]]