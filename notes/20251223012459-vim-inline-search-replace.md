# Find and replace in Vim without substitution

`*` - goes to next occurrence of word under cursor
`#` - goes to prev occurrence of word under cursor

Alternatively you can regularly search with `/` first.

Once you have the search pattern, you can use `cgn` to change the next occurrence of said search pattern.
Type in what you want to change it to, and then repeat that with `.` as needed.

`cgN` can be used to go in the other direction.

This provides a way to find and replace 'inline', so you can see the changes as they happen.

[[vim]]