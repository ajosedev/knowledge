# Width and Height in CSS

Height and width are fundamentally different in CSS. Block-level elements will always take up the available width, but they do not take up all of the available height. Instead, they take up the height required by their children.

Widths are calculated by looking **up** the tree, heights are calculated by looking **down** to the children. This makes a paradox when you set the height of an element:
- The child is saying “I want to be 50% of my parent’s height”.
- The parent is saying “I want to be the smallest height required to contain my children”.

This is why setting a relative height on a element sometimes doesn't work.

To overcome this, you need a knowable height - an explicit height set somewhere. You can nest these as needed, as long as they're all calculated from an initial explicit (i.e. knowable) size.
```css
  main {
    height: 24rem;
    outline: 2px dashed;
  }
  .wrapper {
    height: 50%;
    background: peachpuff;
    padding: 1rem;
  }
  p {
    height: 50%;
    background: tomato;
  }
```
Note that the height is based off the content box. [[20220801123109-css-box-model]]

The root `html` element is a bit of a special case. Using `height: 100%` still works there even though it's a relative height. This is because it uses something similar to the viewport itself to calculate its height, which is knowable. This in turn means you can funnel the value down all the way through your DOM and make everything a percentage if wanted.
	However that can also be done a bit better through things like [[20220104103715-css-viewport-units]] now.

`min-height` is another tricky one. Sometimes you can't set an exact height, but you still want an explicit minimum height.
```css
  main {
    min-height: 24rem;
    outline: 2px dashed;
  }
  .wrapper {
    /*
      This “height” declaration
      isn’t doing anything 🫤
    */
    height: 100%;
    background: peachpuff;
    padding: 1rem;
  }
```
In the above example, the `height` declaration doesn't actually do anything, as the element no longer has a fixed size. We're back to the paradox.
The solution is to use something like [[cssgrid]] or [[flexbox]], effectively a different [[20220815043921-layout-algorithms-css]].

```css
  main {
    /* Switch to Grid layout: */
    display: grid;
    min-height: 24rem;
    outline: 2px dashed;
  }
  .wrapper {
    /* No more height required! */
    /* height: 100%; */
    background: peachpuff;
    padding: 1rem;
  }
```
In a grid formatting context, elements don't shrinkwrap around their children, they grow to fill their grid cell both horizontally and vertically. Thus, the child grows automatically. A similar thing can be done with flex:
```css
  main {
    display: flex;
    min-height: 24rem;
    outline: 2px dashed;
  }
  .wrapper {
    /* Grow to fill the available space: */
    flex: 1;
    background: peachpuff;
    padding: 1rem;
  }
```

https://www.joshwcomeau.com/css/height-enigma/

[[css]]