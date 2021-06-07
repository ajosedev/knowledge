# Stacking Contexts in CSS

By default, whichever element was rendered later (i.e. lower in the DOM tree) will show up 'on top'. However the DOM order is also tied to a11y with it's tab order, so moving this around is not always possible.

`z-index` allows us to specify which element should be painted on top of another, with the higher value winning out. This assumes the elements are all within the same **stacking context**.

Within a stacking context, only children in that element are compared with other children. This means that if an entire stacking context (#1) is underneath another (#2), it will never be possible for a child of #1 to render on top of an element in #2, regardless of its z-index value.

```html
<style>
    header {
      position: relative;
      z-index: 2;
    }

    main {
      position: relative;
      z-index: 1; /* Creates a stacking context */
    }

    .tooltip {
      position: absolute;
      z-index: 999999;
    }
</style>

<header> <!-- Stacking context 1 -->
  My Cool Site
</header>

<main> <!-- Stacking context 2 -->
  <div class="tooltip">
    A tooltip
  </div>
  <p>Some main content</p>
</main>
```

Stacking contexts can be made in many ways, using `opacity`, `mix-blend-mode`, `z-index`, `transform`, and many more.

`isolation: isolate` is another way of creating a stacking context, but importantly that's the _only_ thing it does. This is helpful for creating a new context without relying on a 'side effect', and can help components encapsulated. The `z-index` won't bleed outside of the component, it's concelead from the rest of the app and therefore doesn't clash with any other set `z-index` values in the app.

https://developer.mozilla.org/en-US/docs/Web/CSS/z-index
https://developer.mozilla.org/en-US/docs/Web/CSS/isolation

#css