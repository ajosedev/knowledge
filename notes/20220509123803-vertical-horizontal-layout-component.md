# Vertical and horizontal layout components
Layout components often handle rendering components vertically and horizontally with space in between.

In some cases, these are handled by two different components. `Stack` handles the vertical axis, and `Inline` handles the horizontal. These two usually share a similar API and needs, such as aligning content on their main axes, or changing root elements.

There may be merit to having a single component to handle both axes. Often a horizontal layout wants to switch to vertical on narrower viewports. Having two separated components conflates their responsibilities. Switching between the two manually can also be a hassle.

A single component using something like [[20211203043448-responsive-props]] could handle both responsibilities in a graceful manner.

[[20200314214239-layout-components]]

[[componentapi]]
[[components]]
[[designsystem]]
[[space]]