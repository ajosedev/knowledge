# Squashing all commits on a branch

```bash
git checkout yourBranch
git reset $(git merge-base master $(git rev-parse --abbrev-ref HEAD))
git add -A
git commit -m "one commit on yourBranch"
```

This can also be useful to throw away all of your commits and 'start fresh' to make more meaningful commits.

[[git]]
