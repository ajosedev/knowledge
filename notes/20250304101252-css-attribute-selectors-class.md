# Careful when using attr selectors with class

Note when using with `class` as an `attr`. The entire class is one string, meaning that checking for a value at the start or end of the string is per the entire string, not individual classes.

e.g. `class^=['swan-col-']` does not match depending on the class order.
```jsx
// Matches
<div className="swan-col-2 custom-class" />

// Does not match
<div className="custom-class swan-col-2" />
```

`class*=['swan-col-']` will match both of the above.

[[css]]