# Ponyfills vs Polyfills

A **polyfill** adds missing functionality using monkey patching. For example, this can get you `Array.prototype` methods in Javascript such as `.map` and `.reduce`. This can be dangerous as it affects all code running in the environment, as other pieces of code may rely on this unbeknownst to the developer.

A **ponyfill** doesn't patch anything, but provides functionality as a standalone module you can use. It avoids altering the 'default' API, while allowing you to use it eplicitly.

#concepts