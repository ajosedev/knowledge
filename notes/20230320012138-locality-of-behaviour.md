# Locality of Behaviour

> The behaviour of a unit of code should be as obvious as possible by looking only at that unit of code.

A common objection is that inlining implementation details makes it more brittle. However, there's a distinction between inlining implementation details, and inlining declaration details. Implementation details should still be abstracted away, but ideally declaration details are obvious, to help readability.

This is in conflict with [[20230130013027-separation-of-concerns|separation of concerns]]. The two are at odds with each other. However, it's not all or nothing. There are tradeoffs between the two approaches, and both approaches have merit. Inline styles and utility-first CSS is an example [[20230130100712-utility-vs-semantic-css]]

There's also a conflict here with [[20200307105301-dry|DRY]], which requires an [[abstraction]] to a singular location. Once again, there are tradeoffs to both approaches. Moving the code away from its use is a violation of LoB, and gets worse the further away the abstraction gets.

https://htmx.org/essays/locality-of-behaviour/

[[abstraction]]
[[principles]]