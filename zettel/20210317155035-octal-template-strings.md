# Octal escape sequences in template strings

You cannot use escaped sequences in template strings by default per the ES2016 behaviour. e.g. trying to add an HTML entity inside a template string such as:
```javascript
`\201C`
```
will not work. Instead, to use a unicode escape, it should be prefixed with `\u`:
```javascript
`\u201C`
```

More info here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2016_behavior

#js