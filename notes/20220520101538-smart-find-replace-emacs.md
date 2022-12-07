# Smart find replace in Emacs

When using lowercase search and replace terms with `:s`, the casing will intelligent replace what the search term is currently using. To enable this, both terms in the action should be lowercase.

`:%s/small/large/g` will change both `small` -> `large`, and `pxSmall` -> `pxLarge`.

This is also helpful when changing multiple words on a single line in combination with visual block selection, e.g. `:'<,'>s/small/large/g`.

[[emacs]]
[[vim]]