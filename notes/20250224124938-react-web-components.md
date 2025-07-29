# React 19 + Web Components

React 19 has brought much better support for writing [[20221024124721-web-components]] within [[react]].

In previous React versions, React treated all unknown properties as attributes. HTML attributes can only have string values, leaving web component authors to use JSON.stringify on more complicated data, or manipulation using the ref directly. You had to write imperative code, rather than declarative React. Thus, wrappers were created to help with translations between React and Web Components.

React 19 fixes this in the following way:
- **Server Side Rendering**: props passed to a custom element will render as attributes if their type is a primitive value like `string`, `number`, or the value is `true`. Props with non-primitive types like `object`, `symbol`, `function`, or value `false` will be omitted.
- **Client Side Rendering**: props that match a property on the Custom Element instance will be assigned as properties, otherwise they will be assigned as attributes.

https://react.dev/blog/2024/12/05/react-19#support-for-custom-elements
https://aleks-elkin.github.io/posts/2024-12-06-react-19/

[[components]]
[[html]]
[[js]]
[[web]]