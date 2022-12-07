# Adding files to git based on status

To add only deleted files to git:
`git ls-files -d | xargs git add`

It's possible to pick a path too with `git ls-files -d -- lib/foo | xargs git add`

To add modified files, use `-m` rather than `-d`.

[[git]]