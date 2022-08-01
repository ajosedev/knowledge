# Common args for ripgrep

Capturing them here because I keep forgetting them.

`-I` - No filenames (`--no-filename`).
`-N` - No line numbers.

`-C <num>` - Context. Show lines before and after match.
`-A <num>` - After context. Show lines after match.
`-B <num>` - Before context. Show lines before match.

 `-c` - Count.

`-g <glob>` - Match glob, e.g. `-g *.js`.
`-t <type>` - Match file type, e.g. `-t js`.
`-T <type>` - Exclude file type, e.g. `-t js`.

`-i` - Ignore case.

[[shell]]