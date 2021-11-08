# ARIA roles and relationships

>The [ARIA spec](https://w3c.github.io/aria/) details which roles need specific parent or child relationships, though it's easy to miss. When looking up the documentation for a role, check for entries for [Required Owned Elements](https://w3c.github.io/aria/#mustContain) and [Required Context Role](https://w3c.github.io/aria/#scope) in the role's Characteristics table. If present, the role in question must be the direct child of a required context role, and its own children must have one of the roles in required owned elements.

ARIA spec:
>The required context role defines the owning container where this [role](https://w3c.github.io/aria/#dfn-role) is allowed. If a role has a required context, authors _MUST_ ensure that an element with the role is contained inside (or [owned](https://w3c.github.io/aria/#dfn-owned-element) by) an element with the required context role. For example, an element with role `listitem` is only meaningful when contained inside (or [owned](https://w3c.github.io/aria/#dfn-owned-element) by) an element with role `list`.

'Owned element' in WAI-ARIA refers to any descendent, but 'Owned by' in this particular rule refers to direct descendent of the owner.

So, if an element's role has a **Required Context Role**, it must be a **direct child** of said context role.
In contrast, **Required Owned Elements** only requires at least one instance of any element listed as a descendent.

This means that divs in between elements may break the accessibility tree as it's not longer a direct child.

Possible solutions:
- Modify the DOM tree
- Use `role="presentation"` or `role="none"`

#a11y

https://sarahmhigley.com/writing/roles-and-relationships/