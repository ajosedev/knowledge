# Search and Replace in Vim's visual block mode

When in visual block mode, search and replace can still be used to replace text only within that range.

First, select the visual block and then press `:`, this will show the command line with the selected range:

```
:'<,'>
```

Then, use `:s` as normal, appending it to the current range, e.g:

```
:'<,'>s/red/green/g
```

[[20220520101538-smart-find-replace-emacs]]

[[vim]]
