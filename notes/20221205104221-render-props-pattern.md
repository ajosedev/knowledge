# Render Props pattern

>A render prop is a prop on a component, which value is a function that returns a JSX element. The component itself does not render anything besides the render prop. Instead, the component simply calls the render prop, instead of implementing its own rendering logic.

Render props are a great way of passing data from the parent to the child, with the child having more control on how it uses said props. [[20210705094040-inversion-of-control]]

A render prop doesn't need to use a prop named `render`. In fact, you can use `children` as a render prop.

Render props can often be rewritten using the [[20221205104644-react-hooks-pattern]].

[[designpatterns]]
[[react]]