# Thoughts on t-shirt sizing for design tokens

Interesting post from Mark Dalgleish here: https://gist.github.com/markdalgleish/c7c293dd5fe96620558e7b1d793ac07a

It seems like the main negatives is that t-shirt sizes aren't predictable. Their main benefit is that their easy to remember, but using types solves that problem in a better way. Because t-shirt sizes aren't semantic or predictable, it's hard to modify them without breaking existing uses.

Using a predictable scale, e.g. 1x, 2x, 3x, etc. can be typed just the same, but offers more meaning in case the scale needs to be adjusted in the future.

Another negative is fitting something retrospectively in the middle of the scale. What if you need something above small but below medium? Numeric scales are a bit better for this, you can introduce a 050, or a 1.5x if needed.

[[20211029152633-design-token-naming]]

[[designtokens]]