# :focus-visible-within

This [[css]] pseudo-selector doesn't exist, but you can make it with a combination of [[20210816101731-css-has]] and [[20220801121830-focus-visible]]. This is a different way of achieving a slightly different [[20220801122940-focus-within]]

Unlike `:focus-within`, this selector doesn't activate if the focus doesn't also meet `focus-visible`

```css
.input-group:has(:focus-visible) {
  outline: 4px solid hotpink;
}
```

| Pseudo-class/selector  | Focus target              | Only applied when focus is helpful | Only applied when ancestor has focus |
| ---------------------- | ------------------------- | ---------------------------------- | ------------------------------------ |
| `:focus`               | Element in focus          | No                                 | No                                   |
| `:focus-within`        | Ancestor element in focus | No                                 | Yes                                  |
| `:focus-visible`       | Element in focus          | Yes                                | No                                   |
| `:has(:focus-visible)` | Ancestor element in focus | Yes                                | Yes                                  |

https://larsmagnus.co/blog/focus-visible-within-the-missing-pseudo-class