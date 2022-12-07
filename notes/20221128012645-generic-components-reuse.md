# Allowing for re-use through good component design

Monolithic components that do everything have many problems. For that reason and more, it's often better to create more generic components that do a single thing well. Think of a bottom-up approach, rather than top-down.

The main problem with these components is that they're hard to re-use. Often a team needs the component with a slight variation. When a component is responsible for handling everything, it's difficult to add this extra variation. Either the component grows and become more monolithic, or the component needs to be duplicated with a separate version. Both options are suboptimal.

Building generic, smaller components allows teams to take only the parts they need. Rather than duplicating and modifying, they just use different composition. If needed, once more use cases are gathered, the composition can be built-in, to help enable consistency. [[20221202114400-design-system-consistency]]

Remember it's easier to fix no abstraction than the wrong abstraction [[20221026123121-the-wrong-abstraction]].

[[20221128011841-components-single-responsibility]]

https://frontendmastery.com/posts/building-future-facing-frontend-architectures/

[[api]]
[[components]]
[[componentapi]]
[[designsystem]]
[[designsystemapi]]