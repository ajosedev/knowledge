# Common args for ripgrep

Capturing them here because I keep forgetting them.

`-I` - No filenames (`--no-filename`).
`-l` - Only filenames
`-N` - No line numbers.

`-M` - max columns

`-C <num>` - Context. Show lines before and after match.
`-A <num>` - After context. Show lines after match.
`-B <num>` - Before context. Show lines before match.

`-c` - Count.

`-g <glob>` - Match glob, e.g. `-g *.js`.
`-t <type>` - Match file type, e.g. `-t js`.
`-T <type>` - Exclude file type, e.g. `-t js`.

`-i` - Ignore case.

`-F` - Treat the search pattern as a literal string, not a regular expression.

`--sort-files` - Sorts the file order

`-w` - Require that all matches of the pattern be surrounded by word boundaries

`-e` - Useful to search for patterns starting with a dash https://github.com/BurntSushi/ripgrep/issues/624#issuecomment-334875115

[[shell]]