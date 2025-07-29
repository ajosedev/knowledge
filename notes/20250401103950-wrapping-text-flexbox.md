# Wrapping text in Flexbox

These two are not equivalent:
```jsx
<div className="flex">
  <span>Hello I am some text</span>
  <span>More text</span>
</div>
```
This treats each span as effectively a block element, meaning text wraps within each block.

```jsx
<div>
  <span>Hello I am some text</span>
  &nbsp;
  <span>More text</span>
</div>
```
This keeps the text wrapping more natural, where individual words will wrap to a new line without breaking everything.

[[20250401103724-flexbox]]

[[flexbox]]