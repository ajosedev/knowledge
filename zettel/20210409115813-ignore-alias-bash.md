# Temporarily ignore aliases in bash

Prefixing a back slash will disable the alias for that one call:

```bash
alias ls="ls -al"

ls # runs ls -al
\ls # runs ls
```

#shell