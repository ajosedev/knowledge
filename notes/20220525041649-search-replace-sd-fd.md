# Using sd with fd to find and replace across files

```sh
sd 'from "react"' 'from "preact"' $(fd --type file)
```

[[shell]]