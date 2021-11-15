# Optional chaining in Javascript

Optional chaining (`?.`) greatly eases the ability to access a deeply nested property without having to check each stage being valid/defined. It will short-circuit with the value of `undefined` rather than throwing an error.
```javascript
if (someObject.foo && someObject.foo.bar && someObject.foo.bar.baz)

// Now
if (someObject.foo?.bar?.baz)
```

It can also be used to call functions. If the funciton does not exist, it also will return `undefined`
```javascript
if (foo.bar) {
    foo.bar();
}

// Now
foo.bar?.()
```

[[js]]