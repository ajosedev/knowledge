# The wrong abstraction

>Duplication is far cheaper than the wrong abstraction

Similarly:
>Write code that is easy to delete, not easy to extend.

You can't know the best abstraction up front. When writing code, it's okay to be messy, but you **must** then clean it up before you consider it 'complete'.

Copy-paste code first, and then [[20200307105301-dry|DRY]] it up after once you fully understand it. Write up a large function, then break it into pieces.

Before adding conditional logic to an abstracted piece of code, try working backwards:
1.  Re-introduce duplication by inlining the abstracted code back into every caller.
2.  Within each caller, use the parameters being passed to determine the subset of the inlined code that this specific caller executes.
3.  Delete the bits that aren't needed for this particular caller.
Often, you'll find that each caller is actually quite unique, despite them trying to use the same abstraction. If that's the case, you probably already had the wrong abstraction.

Just because existing code is already there, doesn't mean it's correct, nor the best it could be. [[20221202011240-existing-code]]

Keywords: 'Premature abstraction'

[[20211115112656-rule-of-three]]
[[20200307105301-dry]]

https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction
programmingisterrible.com/post/139222674273/write-code-that-is-easy-to-delete-not-easy-to
https://programmingisterrible.com/post/139222674273/write-code-that-is-easy-to-delete-not-easy-to

[[abstraction]]
[[concepts]]
[[engineering]]
[[refactoring]]