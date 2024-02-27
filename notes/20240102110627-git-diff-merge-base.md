# Getting diff from merge-base

`git diff <target branch>` shows all changes made from your current branch to the latest version of the target branch.

Often you want to get the intentional changes, i.e. the changes made in this branch from the point of origin:

```sh
git diff <target branch>...
```

https://stackoverflow.com/questions/29810331/is-there-a-quick-way-to-git-diff-from-the-point-or-branch-origin

[[git]]