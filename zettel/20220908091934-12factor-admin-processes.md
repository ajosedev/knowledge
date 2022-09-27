# 12 Factor: 12. Admin processes
**Run admin/management tasks as one-off processes**

Developers often need to do one-off administrative or maintenance tasks, such as migrations, one-time scripts, running arbitrary code, etc.

These should be run in a one-off admin process with an identical environment to a regular process of the app. It should use the same codebase and config as the release they're referencing.

[[12factor]]
[[architecture]]
[[infrastructure]]
[[ops]]