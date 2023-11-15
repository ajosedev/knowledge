# Constructable stylesheets

Constructable stylesheets allow you to imperatively create styles and apply them to an explicit DOM tree.

Unlike the traditional method of creating a `style` element with `document.createElement('style')`, this approach reduces bloat and avoids the flash of unstyled content (FOUC).

Using constructable stylesheets makes it possible to define and prepare shared CSS styles and then apply those styles to multiple Shadow Roots or the Document easily and without duplication. Once applied, the stylesheet can be updated, which in turn is updated on all its consumers.

Constructable stylesheets use the existing `CSSStyleSheet()` constructor, with the new `adoptedStyleSHeets` property available on Shadow Roots and Documents.

```js
// Create our shared stylesheet:
const sheet = new CSSStyleSheet();
sheet.replaceSync('a { color: red; }');

// Apply the stylesheet to a document:
document.adoptedStyleSheets = [sheet];

// Apply the stylesheet to a Shadow Root:
const node = document.createElement('div');
const shadow = node.attachShadow({ mode: 'open' });
shadow.adoptedStyleSheets = [sheet];
```

[[browsers]]
[[css]]
[[js]]