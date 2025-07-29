#todo
#todo - care more about ESM than CJS, but would be good to know the differences

js execution for different module types
what's hoisted
what's synchronous, what's asynchronous
	Does async/await matter here too?
etc
How does JS execution work when importing modules
Is it different depending on the module import type? e.g. ESM vs CJS
If I have a function or variable declaration in a separate module, does that get execute on import before the next import?
I think it's executed in place
Are they only executed once?
Are they executed synchronously?
Apparently different for ES2020 and async modules?
Does ESM always result in a singleton?
What about if an exported object references another export, does it go down the tree?
What if that second level of object is generated, when does that code get executed? e.g. file1 imports file2 object, file2 object spreads the object from file3. file3's object is optionally generated through something, e.g. `export const Object.keys(...`
what are scopes?

https://javascript.info/modules-intro
https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/
https://exploringjs.com/es6/ch_modules.html#sec_modules-in-browsers

[[browsers]]
[[js]]
[[node]]
