# Repeating last command in shell

`!!` is a shortcut to repeat the last command you entered in your shell. It can be prefixed with other commands to allow you to add something to the start of the command easily.

```bash
> rm -rf *
# Permission denied

> sudo !!
# Outputs sudo rm -rf *
```

[[20210225130028-pbcopy]]

[[shell]]