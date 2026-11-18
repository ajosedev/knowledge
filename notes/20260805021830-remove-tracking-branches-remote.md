# Git branch cleanup

Removes branches marked as `[gone]`

```sh
git fetch -p && git branch -vv | awk '/: gone]/{print $1}' | xargs git branch -d
```

[[git]]