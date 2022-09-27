# CSS attributes selectors

`[attr]`
Represents elements with an attribute name of _attr_.

`[attr=value]`
Represents elements with an attribute name of _attr_ whose value is exactly _value_.

`[attr~=value]`
Represents elements with an attribute name of _attr_ whose value is a whitespace-separated list of words, one of which is exactly _value_.

`[attr|=value]`
Represents elements with an attribute name of _attr_ whose value can be exactly _value_ or can begin with _value_ immediately followed by a hyphen, `-` (U+002D). It is often used for language subcode matches.

`[attr^=value]`
Represents elements with an attribute name of _attr_ whose value is prefixed (preceded) by _value_.

`[attr$=value]`
Represents elements with an attribute name of _attr_ whose value is suffixed (followed) by _value_.

`[attr*=value]`
Represents elements with an attribute name of _attr_ whose value contains at least one occurrence of _value_ within the string.

`[attr operator value i]`
Adding an `i` (or `I`) before the closing bracket causes the value to be compared case-insensitively (for characters within the ASCII range).

`[attr operator value s]` Experimental
Adding an `s` (or `S`) before the closing bracket causes the value to be compared case-sensitively (for characters within the ASCII range).

https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors

[[css]]