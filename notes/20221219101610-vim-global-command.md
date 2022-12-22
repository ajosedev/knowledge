# The Global Command in Vim

Similar to the substitute command, but it will execute a command on the pattern.
```vim
:g/pattern/command
```
The command can optionally be prefixed with a [[20221219095604-vim-ranges|range]].

The following command will execute the `:d` command on all lines matching the pattern 'useless':
```vim
:g/useless/d
```

When combined with the `:norm` command, this lets you apply normal keystrokes on lines matching a pattern.

```vim
:norm daw
```
Will delete the word under the cursor

```vim
:g/useless/norm wdaw
```
Will delete the first word on each line that matches the pattern 'useless'.

[[vim]]