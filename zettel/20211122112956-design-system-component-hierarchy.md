# Components, recipes, and snowflakes in a design system

Some vocabulary on different 'levels' of components to helps avoid cluttering the design system:
- Snowflakes: one-off components that are used sparingly, often for a particular page
- Recipes: reusable components (usually an organism (TODO - link)) often scoped to a product. A specific composition of a design system component
- Design system component: your base components - button, table, select, etc.

![[DS component hierarchy.png]]

Feel free to move components up/down as required, but avoid cluttering the design system with new components that are product-specific. It's still hard to move things out. [[20211108153157-design-system-boundaries]]

This idea leans into composition - recipes are often created using composed DS components, usually using some sort of 'slots' or [[20210412143336-compound-components|compound components pattern]]

Rule of thumb is to aim to build for the bottom layer, as it helps you build components that are as reusable/agnostic as possible.

[[components]]
[[designsystem]]