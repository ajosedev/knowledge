# Utility-first CSS + CSS-in-JS

[[20230126095251-utility-first-css]] works really well with [[cssinjs]]. Or at least, the mindset of Utility-first CSS. So much so, that it's worth re-evaluating Utility-first CSS if you weren't using it with a framework like [[react]] or [[vue]].

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
It allows users to create custom components and styling as needed, but importantly it **constrains the props (and their values) as required**. This is something you can encourage in Utility-first CSS, but using CSS-in-JS makes it required.

Not only that, but you can use components to provide better abstractions and APIs. Rather than creating a button as such:
```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
```
You can abstract that into a component which applies all the styles internally:
```jsx
<Button>Button</Button>
```

Need a variant? You can do that internally too, and expose a prop. Under the hood it's using Utility-first CSS, but your users don't need to know that.
Need more control? You can still expose a subset of props, such as `padding` or `color`. Note that these are still constrained - you can't pass anything and get unwanted snowflakes.

A common complaint with Utility-first CSS is the need to learn a new API. You're not using `margin-top`, you have to use `mt`, or whatever class naming is used in the project. With a CSS-in-JS API, you can go back to standard API names - `marginTop` is a lot easier to remember.

https://jxnblk.com/blog/two-steps-forward/

[[20230130100712-utility-vs-semantic-css]]

[[css]]
[[cssinjs]]
[[js]]