# Git commit fixup references a name

Usually `git commit --fixup` references a Git SHA.

However, you can use it to reference the most recent commit that matches some text.
```sh
git commit --fixup :/foo
```

[[git]]