# Slice operations in Go

When dealing with lists or similar in Go, square brackets can be used to access a sequence.

`[1:4]` will return 3 bytes, 1, 2, and 3. The fourth byte is not returned
`[:4]` will return anything before the fourth byte
`[4:]` will return anything after (and including) the fourth byte

[[go]]