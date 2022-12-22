# ts-morph vs jscodeshift

**ts-morph**
https://github.com/dsherret/ts-morph
Built for Typescript from the ground up. Allows for auditing and manipulations of Typescript-only code, like `interfaces` and `types`.
As of now, not the best at JSX manipulation.
Supposedly quicker?
Less popular, and seemingly maintained by a single person.

**jscodeshift**
https://github.com/facebook/jscodeshift
Built for Javascript, but also supports Typescript. Wrapper around `recast`.
Has guidance around testing. Although seemingly less documentation on the API?
Not sure if it has any control over Typescript-only things.
Much more popular, exists under the Facebook org on GitHub. e.g. [[20211130062109-easy-codemods-codeshift]]

Both seem to be lacking documentation - best way is to learn as you go.

In theory if `ts-morph` can do Typescript and jscodeshift can not, it makes sense to dedicate time to the former. However, the larger seems to have a larger community and more examples to pull from.

The knowledge is _somewhat_ transferable. At the end of the day, you're doing [[ast]] manipulation. There's a certain barrier to learning all the nodes, their properties, etc. Both libraries have slightly different functions/wrappers/helpers though.

[[ast]]
[[codemods]]
[[migrations]]
[[ts]]