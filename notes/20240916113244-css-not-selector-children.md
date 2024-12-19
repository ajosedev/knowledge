# How to select elements that are not children of other elements in CSS

The [[20211115082404-css-not-selector]] can support complex selectors, allowing for some funky things. This allows you to exclude elements that are children of another element.

```css
/* Select all images that
   are not children of a picture element */
img:not(picture *) {
  border: 3px solid red;
}

h2:not(:where(article *, section *)) {
  ... 
}

/*
<article>
  <h2> No match! </h2>
</article>

<section>
  <h2> No Match! </h2>
</section>

<aside>
  <h2> Match! </h2>
</aside>
*/
```

I'm pretty sure this is also possible with [[20210816101731-css-has]], but `:not` has better browser support.

https://www.stefanjudis.com/snippets/how-to-select-elements-that-are-not-children-of-other-elements-in-css/
https://css-tricks.com/almanac/pseudo-selectors/n/not/#aa-complex-selectors

[[css]]