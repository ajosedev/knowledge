# Using multiple TSConfigs in Typescript

#todo 

- You can have nested TSConfig files
- These can be used by IDEs to apply the correct compilerOptions to a subset of your project
	- That can be explicit subfolders, or can be tweaked to be different file types (e.g. source vs tests)
- Effectively this allows you to typecheck per the closest TSConfig

- However, once you import from one folder ('module'?) with a TSConfig to another it gets a bit more complicated
- Types are checked with the original TSConfig - e.g. the one of the app that you are building
- This means that if you have differing strictness levels, you'll run into errors when importing a different area of a code
	- https://github.com/nrwl/nx/issues/8596
- Bigger deal in [[monorepo]]s
- It seems like you can't really solve it per issues like these
	- https://github.com/microsoft/TypeScript/issues/37853
	- https://github.com/microsoft/TypeScript/issues/8405
- Seems like 'project references' are the solution to this, but [[nx]] doesn't really use them
	- It seems like this effectively builds modules separately
	- Can also get some speed improvements
	- Importing a module loads its output declaration file, and only builds it when needed
	- https://jakeginnivan.medium.com/using-typescript-project-references-in-nx-b3462b2fe6d4
- To counter this, some companies effectively run typescript twice. Once for the actual build, and one just for typechecking https://www.figma.com/blog/inside-figma-a-case-study-on-strict-null-checks/
- There was some activity to solve this in a TS PR, but it seems like it may not ever be merged
	- https://github.com/microsoft/TypeScript/pull/49886

https://github.com/RyanCavanaugh/project-references-demo
https://github.com/ozknemoy/node-ts-nodemon-starter/tree/ts-starter-app_3-tsconfigs

https://github.com/nrwl/nx/issues/4508