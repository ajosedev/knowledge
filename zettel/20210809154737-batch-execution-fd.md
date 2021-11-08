# Executing commands with `fd`

`fd` supports command execution on the found results using `-x`. This runs an external command for each of the search results in parallel.
In combination with the 'placeholder syntax', this allows us to easily do some batch renaming, such as changing the file extension, or adding a prefix.

```bash
fd * -x mv {} prefix-{}
```

`fd` also has `-X`, which launches the external command _once_ with all search results as arguments.

https://github.com/sharkdp/fd#command-execution

#shell