# Printing a babel config

You can use the env var `BABEL_SHOW_CONFIG_FOR` to print the effective config for a file. This is useful in cases like a monorepo, where the babel config extends from a root config.

Note that you have to point to a file, not a directory, e.g.
```sh
BABEL_SHOW_CONFIG_FOR=./src/myComponent.jsx npm start
```

https://babeljs.io/docs/en/configuration#print-effective-configs

[[babel]]
[[buildtooling]]
[[js]]
[[webpack]]