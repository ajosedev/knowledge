# Module federation deep dive

- Import code from other builds at runtime
- Share vendor code dynamically at runtime
- Allows microfrontends to work like a monolith
- Improve DX without compromising UX
- Works in any JS environment

## Share scope

'Share scope' is the solution for shared modules. It checks the versions of all modules that are imported, and returns the best one to all the current containers, regardless of it's the one specified or not (using semver). This means if the original 'host' container wants React@^12.0.0 and a 'remote' container wants React@12.0.1, both containers would use 12.0.1.
Multiple share scopes can exist to allow for different versions of a shared dependency, which can be helpful for legacy apps.

## Config

Module federation relies on an exported config ('container plugin'?) from each app. Simplified, this config specifies things such as: name, filename, exposed modules, and shared deps. These file paths/names/exports are then used in standard import statements.

## Terminology

Host: A webpack build that is initialised first during a page load. Not dependent on anything special, so it can change from page to page
Remote: Another Webpack build, where part of it is being consumed by a 'host'
Bidirectional host: Can act as either a 'host' or 'remote'
Omnidirectional hosts: Acts as both a 'host' and 'remote' at once

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

## Federation dashboard

Coming soon, gives stats/graphs/views on how everything is consuming one another, as well as shared dependencies, etc.

[[20210927141042-module-federation]]

[[architecture]]
[[browsers]]
[[microfrontends]]
[[microservices]]
[[monoliths]]
[[web]]
