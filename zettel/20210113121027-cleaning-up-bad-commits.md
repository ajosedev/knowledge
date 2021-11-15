# How to clean up a bad commit history

When dealing with some greenfield work, sometimes the problem isn't fully revealed before you start, leading towards an unclean commit history with lots of small commits that don't work.

Before merging to master, it's a good goal to have clean commit messages (as always). A potential strategy for cleaning the branch up is:

`git rebase master` to make sure your branch is up to date with master
`git reset --soft master` to reset all the files on your branch (and keep them unstaged)
`git add -p` to add changes on a per-hunk basis
`git push -f` once all the new commits have been created

This allows you to effectively 'restart' your branch, keeping all your changes unstaged and able to be commited in a more appropriate order.

[[git]]
