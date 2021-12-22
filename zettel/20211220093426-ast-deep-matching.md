# Deep matching nodes in AST

When working with AST walkers, most have functionality of executing separately on entering and leaving a node. This means once the walker enters a node, it will fully explore everything nested in it before it leaves taht node.
For example, given the following DOM:
```html
<node1>
	<node2>
		<node3>
		</node3>
	</node2>
	<node4>
	</node4>
</node1>
```
The AST order would be: enter-node1, enter-node2, enter-node3, leave-node3, leave-node2, enter-node4, leave-node4, leave-node1.

We can leverage this to help us deep match nodes under conditions of the node above it. For example, for finding the variable name for all uses of the `styled()` function:
- First, store the name of the variable when finding a variable declaration
- Then, when finding a function call, check to see if it's using `styled`
- If it is, we have the name already stored
- Otherwise if we leave the variable declaration node before that happens, we aren't in the right spot.

https://kurthutten.com/blog/deep-ast-matching/

[[ast]]
[[codemods]]