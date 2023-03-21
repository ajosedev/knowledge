# Fuzzy searching with fzf + rg

A function for fuzzy searching with fzf and ripgrep:
```sh
rgf () {
        export FZF_DEFAULT_COMMAND="rg --column --line-number --no-heading --color=always -- ''"
        fzf --ansi --delimiter ':' --nth '3..'
}
```

`--nth` searches just the text, not the file name

https://vladimirzdrazil.com/posts/fuzzy-search-through-files-in-visual-studio-code/

[[shell]]