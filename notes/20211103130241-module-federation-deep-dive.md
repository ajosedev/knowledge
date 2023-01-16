# Module federation deep dive

## Terminology
Host: A webpack build that is initialised first during a page load. Not dependent on anything special, so it can change from page to page
Remote: Another Webpack build, where part of it is being consumed by a 'host'
Bidirectional host: Can act as either a 'host' or 'remote'
Omnidirectional hosts: Acts as both a 'host' and 'remote' at once

## Deployment
Federated modules are deployed like assets, not like servers. Since they are static JS files, they can be served through something like S3.

## Versioning
Federated modules are not inherently versioned. It's a runtime dependency that gets updated immediately as it's fetched.

You can mitigate this in various ways, such as a smart versioning layer.
Consider failing gracefully whenever possible.

## Share scope
'Share scope' is the solution for shared modules. It checks the versions of all modules that are imported, and returns the best one to all the current containers, regardless of it's the one specified or not (using semver). This means if the original 'host' container wants React@^12.0.0 and a 'remote' container wants React@12.0.1, both containers would use 12.0.1.
Multiple share scopes can exist to allow for different versions of a shared dependency, which can be helpful for legacy apps.

## Config
Module federation relies on an exported config ('container plugin'?) from each app. Simplified, this config specifies things such as: name, filename, exposed modules, and shared deps. These file paths/names/exports are then used in standard import statements.

## Sample code
Host config:
```js
const ModuleReferencePlugin = require("webpack/lib/container/ContainerReferencePlugin");

new ModuleReferencePlugin({
    remoteType: 'global',
    remotes: ['app_one', 'app_two'],
    overrides: {
        react: 'react',
    }
});
```

Remote config:
```js
const ModuleContainerPlugin = require("webpack/lib/container/ContainerPlugin");

new ModuleContainerPlugin({
    name: 'app_one',
    library: { type: 'global', name: 'app_a' },
    shared: {
        react: 'react',
    },
    exposes: {
        Title: './src/components/Title'
    }
});
```

## Where/what could you federate?

Some examples of where to draw some lines:

- UI code
- Configurations
- Business logic
- Translations
- Side-effects
- Reducers
- Context
- Authentication modules
- Analytics

[[20210927141042-module-federation]]

[[architecture]]
[[microfrontends]]
[[microservices]]
[[rendering]]
[[web]]
