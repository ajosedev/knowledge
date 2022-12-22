# Package aliases in NPM

Or how to install multiple versions of the same package in [[npm]].

As of [NPM 6.9.0](https://github.com/npm/cli/releases/tag/v6.9.0), [[npm]] now supports installing multiple versions of the same package. The syntax is the same as [[yarn]].

Install a package with its name, and then the version requested, e.g:
```sh
npm install jquery2@npm:jquery@2
npm install jquery3@npm:jquery@3
```

This results in the following `package.json`:
```json
"dependencies": {
   "jquery2": "npm:jquery@^2.2.4",
   "jquery3": "npm:jquery@^3.4.1"
}
```

The dependency can then be imported with the new name, e.g:
```js
import { module } from 'jquery2';
```

https://github.com/npm/rfcs/blob/main/implemented/0001-package-aliases.md