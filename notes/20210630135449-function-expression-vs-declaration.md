# Function declarations vs Function expressions

**Function declarations**
- Start with `function`
- Is hoisted
```javascript
function sum(a, b) {
    return a + b;
}
```

**Function expressions**
- Assigns a function to a variable
- Can only be used after it is defined
- Is **not** hoisted
- Can be used as IIFE
- Often used as a callback
- Doesn't need a function name (creates an _anonymous function_)
```javascript
let sum = function(a, b) {
    return a + b;
}

// This is also a function expression
button.addEventListener('click', function(event) {
    console.log('button is clicked!')
})
```

[[js]]