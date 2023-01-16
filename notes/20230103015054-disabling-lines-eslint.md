# Disabling lines in ESLint

Disabling the current line instead of the next line in [[eslint]] has a few advantages.

When refactoring code, especially unseen, it's easy for the two lines of code (the code itself and the disabling comment) to become split. Or alternatively, the code is changed and the comment is no longer relevant.

For example, using a tool like [[prettier]] to organise imports, it may re-format the code and move one line above another. The comment which was previously above the problematic line of code, is now above an unrelated piece of code.

Disabling the same line of code makes it harder to errantly disable rules for code that wasn't the original target.

Either way, it's good practice to disable only the specific rule, not a blanket disable.

```js
// eslint-disable-next-line
const foo = 'Bad';

const bar = 'Good'; // eslint-disable-line no-unused-vars
```