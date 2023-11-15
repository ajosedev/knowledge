# Avoid catch-all buckets

It's really tempting and easy to group all of your 'helpers' or 'utilities'/'utils' into a single bucket. This bucket is often too encompassing, and starts to own everything. It becomes hard to find, hard to maintain, unknowingly duplicated, lacks a defined purpose, and usually becomes unmaintained due to a lack of owner.

'Utils' doesn't convey a purpose, it's just 'reusable functions', which is kind of everything. I don't think it's an anti-pattern, but I do think it's a smell.

A better solution is to group utils by their purpose, area, or domain. Having sub-folders with different utility methods for arrays, logging, validation, etc. often provides enough structure to ease the problems and make things findable again.

Remember that because something is generic doesn't mean it needs to move to a generic place immediately. That can often mean you find the [[20221026123121-the-wrong-abstraction]].
[[20211115112656-rule-of-three]]

https://softwareengineering.stackexchange.com/questions/422907/is-putting-general-use-functions-in-a-helpers-file-an-anti-pattern-or-code-sme

[[20230130013734-domain-driven-design]]

[[engineering]]
[[smells]]