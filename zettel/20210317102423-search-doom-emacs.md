# Searching in doom-emacs

- `/` - search buffer
- `SPC /` - search projects
- `SPC '` - open last search
- `SPC s d` - search current directory\
- `SPC s B` - search all open buffers
- `SPC s .` - re-open last search

**Swiper**
- `SPC s s` /  `CMD+f` - swiper-isearch
- `SPC s S` - swiper-isearch-thing-at-point

When searching (is this `ivy`?):
- using `Shift + SPC` lets you further refine the results.
- using `C-SPC` previews a result
- using `M-RET` opens a result without closing minibuffer
- using `C-RET` opens a result in a new window
- using `C-c C-o` opens search results in a new buffer `ivy-occur`
- using `C-c C-e` opens search results in a new writeable buffer
- using `M-p` shows previous search query
- using `M-n` shows next search query


I believe most of these shortcuts are powered by Ivy/Counsel

`C-o` when highlighting a file in the minibuffer shows additional options?

[[20201223155402-rg-filetype]]

[[emacs]]