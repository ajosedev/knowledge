# Normal command in Vim

```
:norm[al][!] {commands}					*:norm* *:normal*
                        Execute Normal mode commands {commands}.  This makes
                        it possible to execute Normal mode commands typed on
                        the command-line.  {commands} are executed like they
                        are typed.  For undo all commands are undone together.
                        Execution stops when an error is encountered.
```

The `:norm` command lets you execute commands as if they were regularly typed, but in the command line.

For example, you can run the following command to append text after each line within a range.
```
'<,'>:norm A,
```

Of course you can apply this to the entire document using something like `%` to represent 'for each line'.

[[vim]]