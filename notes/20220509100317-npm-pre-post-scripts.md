# Pre- and Post- scripts in NPM

Given a named script, adding another `pre` or `post` named script will automatically execute that script appropriately with the original script.

For example, given a script named `compress`, a command named `precompress` will automatically execute before, with `postcompress` executing after.

The logic here is fairly simple, requiring the names to match exactly.

NPM has a fair few special lifecycle scripts too, such as `prepare`: https://docs.npmjs.com/cli/v10/using-npm/scripts

[[npm]]
[[shell]]