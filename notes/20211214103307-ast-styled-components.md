# Finding ad-hoc CSS around styled-components

This technique allows you to see what properties are being applied via CSS to a given component. It essentially searches for uses of `styled(Component)` and the following template string, and does a naive match using strings.

The following snippet uses `estree-walker` which relies on Acorn, buit it's probably similar with other AST tools.

```js
const componentName = 'Box'
const match = 'vertical-align';

if (node.type == 'TemplateLiteral') {
	if (parent.tag && parent.tag.type == 'CallExpression') {
		if (parent.tag.arguments[0].name == componentName) {
			const val = node.quasis[0].value.raw;
			if (val.includes(match)) {
				count++;
				console.log(path);
			}
		}
	}
}
```

[[20211130062748-ast]]
[[20210618135410-ui-auditing]]

[[ast]]
[[cssinjs]]
[[designsystem]]