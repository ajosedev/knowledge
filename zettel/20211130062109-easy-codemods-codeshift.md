# Codeshift for JS codemods

https://www.codeshiftcommunity.com/

Codeshift is a wrapper around `jscodeshift` https://github.com/facebook/jscodeshift which aims to make codemods as easy as possible.

It has a few guiding principles that are generally applicable to writing codemods:
- Codemods should target a version of a package. Since code is always changing, this helps keep the intent of the codemod obvious, as well as an order.
- Codemods should be playable in sequence. You should be able to jump multiple versions by running codemods in order.
- Codemods should do what can safely be done, but otherwise prompt for human intervention.

[[20211130062748-ast]]

[[ast]]
[[codemods]]
[[js]]