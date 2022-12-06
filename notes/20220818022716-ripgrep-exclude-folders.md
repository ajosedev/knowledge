# Exclude folders (or files) in ripgrep

```sh
rg foo -g '!bar/'
```

Without the `/`, a file named `bar` will also be excluded.

To ignore multiple files/folders, use `{}`

```sh
rg foo -g '!{.git,.svn,.hg}'
```

[[shell]]