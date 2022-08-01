# Searching git history

`git log -S<search>` can be used to search for a string in Git, even if it was previously deleted. It's known as the 'pickaxe' option.

`-p` shows the diff too
`-i` make it case insensitive

Using `-G` over `-S` will show the result, even if the number of occurrences of the search term exists is unchanged from the commit. This is helpful to show when a line is moved, for example. `-G` also accepts a regex.

https://git-scm.com/docs/git-log#Documentation/git-log.txt---pickaxe-all

[[git]]