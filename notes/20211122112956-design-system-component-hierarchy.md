# Components, recipes, and snowflakes in a design system

Some vocabulary on different 'levels' of components to helps avoid cluttering the design system:
- Snowflakes: one-off components that are used sparingly, often for a particular page [[20220704125509-design-systems-snowflakes]]
- Recipes: reusable components (usually at an organism level) often scoped to a product. A specific composition of a design system component.
- Design system component: your base components - button, table, select, etc.

![[DS component hierarchy.png]]

Feel free to move components up/down as required, but avoid cluttering the design system with new components that are product-specific. It's still hard to move things out. [[20211108153157-design-system-boundaries]]
[[20220704124529-design-system-harvesting]]

https://bigmedium.com/ideas/design-system-ecosystem.html goes into a bit more detail and provides 5 tiers:
- **Core design system layer** – which contains the common, organization-wide UI building blocks for both design and development.
- **Optional technology-specific layer** – which contains framework-specific and native implementations of those common UI components.
- **Optional recipe layer** – which contains composed UI components to be used consistently across specific contexts (like a product or product family), but aren’t reusable across the entire organization.
- **Optional smart components layer** – which contains UI components wrapped in logic, functionality, or other smarts to make the integration of common components and services easier for product developers.
- **Product layer** – the actual websites and apps that we ship to customers (aka the whole reason we’re doing all of this!)

This idea leans into composition - recipes are often created using composed DS components, usually using some sort of 'slots' or [[20210412143336-compound-components|compound components pattern]]

Rule of thumb is to aim to build for the bottom layer, as it helps you build components that are as reusable/agnostic as possible.

https://bigmedium.com/ideas/the-art-of-design-system-recipes.html

[[architecture]]
[[components]]
[[designsystem]]
[[designsystemapi]]
[[designsystembranding]]
[[product]]