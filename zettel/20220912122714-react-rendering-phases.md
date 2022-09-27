# Rendering phases in React

Conceptually, React does work in two phases:

- The **render phase** determines what changes need to be made to e.g. the DOM. During this phase, React calls `render` and then compares the result to the previous render.
- The **commit phase** is when React applies any changes. (In the case of React DOM, this is when React inserts, updates, and removes DOM nodes.) React also calls lifecycles like `componentDidMount` and `componentDidUpdate` during this phase.

The commit phase is usually very fast, but rendering can be slow. [[20220912123929-concurrent-react|Concurrent React]] aims to break the rendering work into pieces to avoid blocking the browser. This means render phase lifecycles anre invoked zero, once, or multiple times before committing.

The entire process is known as [[20220912120030-react-reconciliation|reconciliation]].

[[react]]