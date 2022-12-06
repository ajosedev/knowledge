# Extend a CSS background outside of its container

Using some clever `box-shadow` + `clip-path`.

```css
.full-background {
  --c: pink;
  background: var(--c);
  /* a big box-shadow */
  box-shadow: 0 0 0 100vmax var(--c);
  /* clip only the top and bottom part of it */
  clip-path: inset(0 -100vmax);
  padding: 10px 0
}
```

This is also possible with `border-image`.

```css
.full-background {
  border-image: conic-gradient(pink 0 0) fill 0//0 100vmax;
  padding: 10px 0
}
```

![[CSS extended background.png]]

https://twitter.com/ChallengesCss/status/1534840059756691464

[[css]]