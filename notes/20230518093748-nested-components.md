# Nested components in React

#todo

In [[react]], 

- Main problem: unnecessary re-renders
	- Re-renders the child component as it's a function, not following the usual child component render rules [[20220822122735-why-react-re-renders]]
- Harder to refactor
- Easier to leak dependencies into it, doesn't have an explicit contract
- Kind of breaks [[20220801053049-solid]] rules
- Harder to test?
- 'function that returns JSX' is similar, and is often seen as an antipattern
	- Afaik, this isn't subject to the same re-render/virtual DOM problems
	- Still has the other problems though, and in general I don't see a good reason to not break it down into components
- Solution: make it it's own component instead

>This means that **you must never create new component types while rendering!** Whenever you create a new component type, it's a different reference, and that will cause React to repeatedly destroy and recreate the child component tree.
https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/#component-types-and-reconciliation

https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md

Keyword: 'component inside component'

[[antipattern]]
[[smells]]