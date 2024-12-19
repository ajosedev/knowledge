# Identifying folder dependencies in NX

[[nx]] is great at generating project graphs and other tooling that shows you links between apps, libraries, etc. However, you can also use this to identify dependencies within folders (i.e. things that are not projects yet).

To do so, add a `project.json` to each relevant folder with a `name` key. Then commands like `nx graph` will show you the links between dependencies.

https://nx.dev/recipes/tips-n-tricks/identify-dependencies-between-folders