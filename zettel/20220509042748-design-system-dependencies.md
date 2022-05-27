# Design system dependencies

In a design system, many components rely on one another. For example, a Modal component may be built on top of a lower level Card component.

Recognise these dependencies helps when making changes. It brings awareness to how things are composed and what may break 'upstream'. Identifying these dependencies is what makes people 'system thinkers'. It also helps when working on a component to see what else in the system you should consider.

Many components rely on another, with these dependencies not always being explicit. Styles are often shared even if components are not.

Versioning components independently can reveal these dependencies as part of your package manager dependency graph. [[20220509021116-design-system-versioning]]

Automation can help here too, to ensure these dependencies are kept up to date.

[[designsystem]]