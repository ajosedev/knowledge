# Searching for React component implementations

`rg <Button.*> -A 2`

Using `.*` in regex matches anything except line breaks
`-A 2` shows 2 lines after each match

This search won't show components with props over multiple lines, but it's decent.

[[emacs]]
[[shell]]