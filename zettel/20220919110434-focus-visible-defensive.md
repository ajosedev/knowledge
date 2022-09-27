# Defensive :focus-visible

If a browser doesn't support `:focus-visible`, you can use `:not` to cleverly work around them. In this case you'd set styling for `:focus`, revert that styling in the `:not` block, and then optionally set keyboard-only focus styling in the `:focus-visible`.

These don't need to be different styles, making these two match would give you backwards-compatible `:focus-visible` styling. Keep in mind that if you are using 'heavy' `:focus-visible` styles, these will appear on mouse interaction on older browsers, which may not be ideal.

For browsers that support `:focus-visible` it will add and remove your `:focus` styling, and then finally add the `:focus-visible` styling:
- Note that for mouse interaction, it won't apply the third block, as you are not using `:focus-visible`. As you are usually reverting styles in the second block, this effectively gives you no focus styles.
- For keyboard interaction, it won't apply the second block, since `:focus-visible` does apply.
- Because of this, you may also want to unstyle the `:focus` styling in the `:focus-visible` block if you don't want to apply both the `:focus` and `:focus-visible` styles.
If the browser doesn't support `:focus-visible` it won't apply the second or third block, leaving you with the default `:focus` styling.

```css
button:focus { 
	/* some exciting button focus styles */ 
}

button:focus:not(:focus-visible) {
 /* undo all the above focused button styles

 if the button has focus but the browser wouldn't normally

 show default focus styles */
}

button:focus-visible { 
 /* some even *more* exciting button focus styles */ 
}
```

Alternatively, use a polyfill and just target `:focus-visible` directly. You may then need to disable browser default `:focus` styling.

Similarly this blanket rule removes the outline for mouse users but preserves it for keyboard users, and is ignored by browsers that don't support `:focus-visible`.
```css
:focus:not(:focus-visible) { outline: none }
```

[[a11y]]
[[css]]