# CSS `word-break` vs `overflow-wrap`

`word-wrap` - the deprecated property that is now called `overflow-wrap`

`overflow-wrap` - specifies whether or not the browser may insert line breaks within words in order to prevent overflow when an otherwise unbreakable string is too long to fit in its containing box
- `normal` - do nothing
- `anywhere` - to prevent overflow, break long words at any point. Soft wrap opportunities introduced by the word break **are** considered when calculating min-content intrinsic sizes
- `break-word` - the same as `anywhere`, but soft wrap opportunities **are not** considered when calculated min-content intrinsic sizes
The difference between the latter two is prevalent when dealing with flex, as the intrinsic min-content calculation may prevent the text from breaking without giving the element `min-width: 0`. In that case, `anywhere` probably accomplishes what the user wants.

`word-break`- specifies soft wrap opportunities between letters
- `normal` - do nothing
- `break-all` - word breaks should be inserted between any two characters to prevent overflow
- `keep-all` - don't use word breaks
- `break-word` - deprecated, and has the same behaviour as `word-break: normal; overflow-wrap: anywhere`
CJK text is used as an example in the W3C spec but the property isn't only used for CJK text. Although it does have different behaviour based on how the browser treats 'words', etc from other languages/alphabets.

`overflow-wrap` seems to deal with words, where as `word-break` deals more with letters?

#css