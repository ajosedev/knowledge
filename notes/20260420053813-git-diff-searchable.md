# Searchable git diff

The following git command gives you a searchable (with syntax highlighting) diff against what you've changed in main.

This makes it easy to search for all of the changes for a certain string or similar, and see how they're used.

`git diff main -U0 | bat -l diff`

[[git]]