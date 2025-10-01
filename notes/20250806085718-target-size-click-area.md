# Minimum target size

The minimum target size (for WCAG AA) is 24x24px.

However, the actual element itself doesn't have to be that size. There's a 'size' and 'space' requirement, with the former encompassing the latter.

If your element can contain a solid 24x24px square, then it meets the size requirement. This part doesn't necessarily need to be visible, meaning that you can use psuedo-elements to create a larger click area while keeping the visuals small. This is often done on components like checkboxes, which are usually visually small.
	Crucially in this scenario, the component is still **reserving** 24x24px of space.

If it can't meet this size requirement, it's considered **undersized**, and can still pass the criteria if it meets the space requirements.
For this, it's about the space around the component. If you draw an imaginary 24px circle over the undersized target and it does not overlap any adjacent targets, then it's still okay! For example a row of 20px square buttons that are spaced 4px apart are still acceptable.

This latter space requirement often comes into play when dealing with more rectangular click targets, e.g. a small text-only button may never be 24px high, but still needs to meet the 24px space requirement.

Hence why it's always easiest to just reserve 24x24px, as you'll always meet requirements.

Note there are also exceptions for 'equivalent actions', inline elements, and more.

https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html