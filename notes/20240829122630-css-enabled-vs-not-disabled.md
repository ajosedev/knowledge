# :enabled vs :not(:disabled)

These sound like they should be the same, but are quite different.

`:enabled` only works if the element can actually be disabled.
`:not(:disabled)` can match elements that are neither `:enabled` nor `:disabled`.

This means that some elements, like `a`, will never match `:enabled` but will match `:not(:disabled)`.

>The :enabled pseudo-class must match any button, input, select, textarea, optgroup, option, fieldset element, or form-associated custom element that is not actually disabled.

https://www.w3.org/TR/selectors/#enableddisabled
https://html.spec.whatwg.org/multipage/semantics-other.html#selector-enabled

[[20211115082404-css-not-selector]]

[[css]]