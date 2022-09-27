# Backwards compatible changes in Go



**Release a v0** that’s not guaranteed to be stable, but which users can try out
After your v0 version is published, you can (and should!) continue to **release new versions** of it.
	These new versions might include bug fixes (patch releases), additions to the module’s public API (minor releases), and even breaking changes. Because a v0 release makes no guarantees of stability or backward compatibility, you can make breaking changes in its versions.

Release a v1 as the **first stable release**.
In the v1 version, **continue to fix bugs** and, where necessary, make additions to the module’s public API.
When it can’t be avoided, publish breaking changes in a **new major version**.
	A major version update – such as from v1.x.x to v2.x.x – can be a very disruptive upgrade for your module’s users. It should be a last resort. For more, see [Publishing breaking API changes](https://go.dev/doc/modules/release-workflow#breaking).

The import compatibility rule:
>> _If an old package and a new package have the same import path,  
> the new package must be backwards compatible with the old package._

Because of this the import path has the major version in it. It's known as 'semantic import versioning'.

In this post, we’ll explore some techniques for introducing non-breaking changes. The common theme is: add, don’t change or remove

https://go.dev/doc/modules/release-workflow
https://research.swtch.com/vgo-principles

Keywords: breaking changes

[[20220509012212-semantic-versioning]]

[[api]]
[[go]]