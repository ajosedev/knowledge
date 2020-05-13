# Conditionally adding to JS object

You can add a a key/value pairing to an object based on a condition, while declaring the object.

```js
{
  constantProperty: 'always',
  ...(condition && {key: value})
}
```

Possible to do it after as well, but it would require more lines.

#js