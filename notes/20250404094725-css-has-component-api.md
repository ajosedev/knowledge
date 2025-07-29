# Using :has in design system components

This is great for [[designsystem]] and [[designsystemapi]], as it lets you detect the children of a component without having to use JS. e.g. check if a subcomponent is used, and position it or add some special CSS, rather than looping over it with React.Children which is often additional complexity. Another example is to check if the element has only one specific child, e.g. `button:has(> img:only-child)`.

For example, if you need to adjust the padding on a parent based on if an image component is rendered inside. Previously you could accomplish this with an additional prop (which would need to be in sync), or looping over the React.Children and applying a class. Now you can just target it in CSS, and adjust the parent as necessary.

Far less complexity than something like [[20210412143336-compound-components]]. Effectively a move from JS to CSS.

[[20210816101731-css-has]]

[[designsystem]]
[[designsystemapi]]