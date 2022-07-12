# Checking a variable is undefined with typeof

Remember that `typeof` returns a string, meaning  this will work:
`typeof variable === 'undefined'`

but this will not:
`typeof variable === undefined` 

Omitting the `typeof` will trigger an error directly, as you're acting on an undefined variable.

[[js]]
[[ts]]