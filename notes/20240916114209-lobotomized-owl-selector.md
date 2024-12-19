# The lobotomized owl selector

The lobotomized owl selector looks like this:

```css
* + *
```

This is great for removing the space at the bottom of containers - common when using margin-bottom on columns and lists.

```css
.list > * + * {
  margin-top: 1.5em;
}
```

https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/

[[css]]
[[intrinsiclayout]]