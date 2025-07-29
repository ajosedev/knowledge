# CSS variables flow down only

Remember that CSS variables flow down from the parent to the child only. This includes CSS variables that reference other ones.

```css
.default-theme {
  --c1: red;
  --c2: blue;
  --grad: linear-gradient(var(--c1),var(--c2);
}

.box {
  --c1: green;
  background: var(--grad);
}
```

```html
<body class="default-theme">
	<div class="box" />
</body>
```

The above snippet creates a linear gradient of `red, blue`, not the desired `green`.
As the calculation is done above the variable changing, it has no effect. Note that this is true for any references, not just 'calculations'.

This can be 'solved' by putting the two classes (calculation and reassignment) at the same level in the DOM:
```html
<body>
	<div class="default-theme box" />
</body>
```

or re-declaring the calculation as the reassignment is done.
```css
.box {
  --c1: green;
  --grad: linear-gradient(var(--c1),var(--c2);
  background: var(--grad);
}
```

This is especially relevant for [[20211029153348-semantic-design-tokens]], where tokens often read from one another. If you have a semantic token that changes its value in a 'mode', any other token that references the changing semantic token will suffer this problem. For example:

```css
.swan {
  --swan-sem-color-bg-standard: var(--swan-base-color-white);
  --swan-sem-color-bg-action: var(--swan-sem-color-bg-standard);
}

.swan-dark-mode {
  --swan-sem-color-bg-standard: var(--swan-base-color-grey-800);
}

/* if .swan-dark-mode is nested within .swan, bg-action is still white. */
/* if .swan-dark-mode is at the same level, the problem doesn't occur */
```

For the SWAN tokens re-architecture, we had custom code that any token (token A) that (recursively) read from another token which changed in a mode (token B), (token A) would be re-set in the mode. i.e. it re-declared the calculation as mentioned above.

This is also true for component tokens, which by their nature usually read from a semantic token. If you are using CSS variables to control things more similar to 'state', consider separating the idea of a token from a CSS variable. i.e. calculating a width of a component is 'state', and thus should be done with non-token CSS variables all of which are set and read from the component-level class.

Once you start mixing where a token can be set (e.g. root level vs mode level vs component level), it's difficult to ensure reading it will have the correct value. **It's always be easiest to either set everything at the same level (what we did for SWAN)**, or have some contract between where things are set and where things are read.

#todo - what happens if you set base and semantic on root, but component at the component class level. Does this break? I think no, but it's worth double checking. e.g. what if comp-alert-bg-error: sem-bg-error was set on a class? If sem-bg-error changes in a mode, this would still recalculate fine, right? It's just a bit harder to actually set it there when working with tooling.

#todo - how does the problem work if you want to set an alternative CSS value based on some other class? e.g.
```css
.swan {
	--swan-comp-button-primary-color-bg-hover: var(--swan-comp-button-primary-color-bg);
}

// Hover is red
.swan {
	--swan-comp-button-primary-color-bg: red;
}

// Hover is blue (wrong)
.swan .accent {
	--swan-comp-button-primary-color-bg: blue;
}
```

#todo - what's the best solution here? is it a closure-like problem where you take a component-level token created in `default-theme`, and then use that value internally? e.g.
```css
.default-theme {
	--sem-bg-error: red;
	--comp-alert-bg-error: var(--sem-bg-error);
}

.dark-theme {
	--comp-alert-bg-error: lightred;
}

.alert {
	--internal-alert-bg: var(--comp-alert-bg-error);
	background-color: var(--internal-alert-bg);
}
.alert--warning {
	--internal-alert-bg: var(--sem-bg-warning);
}
```
#todo - need to test if the above works. But in theory...
That way you can avoid unnecessary CSS property declarations (background-color), as well as ensure you're not modifying semantic/component level tokens used in other calculations. It aims to make a clean line between public and private. We're not changing component-level tokens outside of their initial declaration, but we can change 'internal variables' (these are not necessarily tokens) at the component level.

https://dev.to/afif/what-no-one-told-you-about-css-variables-553o#9-they-only-work-from-parent-to-child

[[20220822094537-themeable-design-systems]]

[[css]]