# Getting counts with ripgrep

To get the counts of something, fall back to the unix philosophy with `sort` and `uniq`.

For example:
```sh
rg -IN import | rg -IN library-name | sort | uniq -c | sort -n
```

`grep -v` might also be helpful here to exclude words

[[20220720101907-ripgrep-common-args]]

[[shell]]