# 12 Factor: 2. Dependencies
**Explicitly declare and isolate dependencies**

Generally, dependencies can be system-wide ('global') or scoped to the app, e.g. bundling or [[20220902015338-vendoring|vendoring]].
A twelve-factor app never relies on the implicit existence of system-wide packages. This includes common tooling such as `curl`, as there's no guarantee they exist.

All dependencies should be defined explicitly.

[[12factor]]
[[architecture]]
[[dependencies]]
[[infrastructure]]
[[ops]]