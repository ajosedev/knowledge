# Reusable components and margin

Adding margin to the styling of a component makes reusing it in different contexts much harder. As it affects siblings and those around it, it can often lead to pages having unwanted margins from inner components that were initially not used in this way.

Components should only style things within themselves, otherwise it makes component encapsulation harder. Thus, a similar problem with `margin` in components exists when using `z-index`.

> Margin is like putting glue on something before you’ve decided what to stick it to, or if it should be stuck to anything

Instead, use layout components that encapsulate margin-related styling, such as `Stack`, `Spacer`, etc. or things such as CSS Grid.

Padding is fine as it affects inner, margin is not as it affects outer.

https://mxstbr.com/thoughts/margin

[[20200314214239-layout-components]] 

#components
#css
#layout