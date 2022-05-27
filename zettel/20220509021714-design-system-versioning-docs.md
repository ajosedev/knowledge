# Version design system documentation separately

It's worth versioning a design system documentation site separately from the component library. Keep a top level folder the the doc site, and another for the library.

Treat the documentation site as a **consumer** of the design system, not part of it.

This way you don't need to make a release for doc changes. This uncoupling allows for distinct workflows for both products. You can still keep the docs page up to date as you release new code too.

Also make sure you serve documentation for past versions. If you have consumers on older versions, they need their documentation too.

[[20220509021116-design-system-versioning]]

[[designsystem]]