# Tips for search and replace in Vim

Officially this is the 'substitute command'.
The syntax is as such:
```vim
:s/pattern/replacement/flags
```

## Ranges
Any [[20221219095604-vim-ranges|range]] can be used:
- `s` - the default range, represents the current line
- `%s` - every line
- any other range

## Repeating
Running just `:s` will repeat the last substitution without the flags.
`:&&` repeats the last substitution with flags
`:~` repeats the last substitute command with the same replacement (2nd arg), but with the last used search pattern (1st arg).

`&` repeats the last substitution without its range and flags in normal mode.

## Flags
-   `&` - use the flag(s) from the previous substitute command
-   `c` - confirm each substitution
-   `g` - replace all occurrences in each line (not only the first one)
-   `i` - case-insensitive
-   `I` - case-sensitive
-   `n` - report the number of matches

[[vim]]