# Utility props API

Many [[designsystem]]s offer an API like the following:
```jsx
<Box
  padding={3}
  fontWeight='bold'
  color='white'
  bg='blue'>
  Hello
</Box>
```
Using a prop API like this instead of custom CSS allows users to create custom components and styling as needed, but importantly it **constrains the props (and their values) as required**.

If you need a variant or similar, you can hide whatever complexity within the component, and offer a simple prop that changes multiple values. e.g a Button with a `mood` that changes the border colour, text colour, etc.
If you need more flexibility, you can still expose a subset of props, such as `padding` or `color`. Note that these are still constrained - you can't pass anything and get unwanted [[20220704125509-design-systems-snowflakes]].

A common complaint with [[20230126095251-utility-first-css]] is the need to learn a new API. You're not using `margin-top`, you have to use `mt`, or whatever class naming is used in the project. With a utility prop API, you can go back to standard API names - `marginTop` is a lot easier to remember, while also getting all the benefits of typechecking, intellisense, etc.

Additionally, the props (and types) make it a lot easier to monitor and gather metrics. CSS is infinitely flexible, but an API pictured above allows for more control, easier testing, better maintenance, avoids specificity wars, control over [[20220125105432-impossible-states]], etc.

https://jxnblk.com/blog/two-steps-forward/

[[components]]
[[componentapi]]
[[css]]
[[designsystem]]
[[designsystemapi]]