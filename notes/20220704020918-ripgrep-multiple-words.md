
# Search multiple words in ripgrep

Assuming you're trying to find multiple words on a single line, you can separate words with `.*`, e.g.
```sh
rg "import.*from.*emu"
```

Note that the order of the words matter, as I believe `.*` is regex for 'any character'.

---

Old way:

`rg foo | rg bar`

`-p` seems to break headings

Passing `--color always --line-number` seems to produce the desired result

If using `rg -pS`, try passing `--no-heading`?

[[shell]]