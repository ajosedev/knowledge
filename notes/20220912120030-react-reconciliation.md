# Reconciliation in React

React has a [[20220829123647-imperative-vs-declarative-react|declarative API]]. This means a lot of the application updates are a bit 'magic', with it have a special diffing algorithm under the hood.

Creating and destroying DOM is slow, so React aims to avoid doing that whenever possible. A representation of the UI is kept in memory as a 'virtual DOM' and compared with the real DOM through a process called 'reconciliation'.

[[20220912122714-react-rendering-phases]]

The `render` function creates a tree of React elements. On the next state or props update, `render` will return a different tree of React elements. React then needs to figure out how how to most effectively update the UI to match the new tree.

When diffing two trees, the root elements are compared first.

If they are different types, the old tree is torn down and the new tree is built from scratch. Type refers to both HTML elements and components, e.g. `a` to `img` or `Button` to `Comment`. This destroys old DOM nodes, unmounts the entire tree of old components, and mounts the new components.

If they are the same type, React aims to update only the changed attributes. This then recurses on the children.

When a component updates. the instance stays the same so that state is maintained across renders. Then the `render` method is called and the diff algorithm recurses on the previous result and the new result.

By default, when recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates a mutation whenever there’s a difference. To avoid inefficiency regardless of where a child is added (e.g. adding a child as the first element means the entire tree is 'mutated'), React uses the `key` attribute. React matches children if the `key` has the same value in the old and new tree.

[[react]]