# Patterns in design systems

It's useful to consolidate guidance and best practices into a single place, usually known as a 'pattern'. A pattern often encompasses how to achieve a solution to a common design problem. Something like authentication, upload, feedback, forms, etc. They are usually a collaboration of components, guidance, choices, etc.

These are extremely useful, but they're often not as good as a more strict API, like a prop/component. The main reason is that they're harder to maintain.

A pattern is instructions - if you update the instructions, you don't update the current use cases/call sites. e.g. if you want your users to do X instead of Y, you can update the pattern, but nothing will change without manual intervention.

This also means you can't break or deprecate things to tell people to stop doing it this way, which you can do with say, props.