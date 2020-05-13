# Reusable components and margin

Margin makes reusability harder when working with components, as it affects siblings and those around it. Components should only style things within themselves, otherwise it makes component encapsulation harder.

Instead, use layout components that encapsulate styling, such as `Stack`, `Spacer`, etc.

Padding is fine as it affects inner, margin is not as it affects outer.

https://mxstbr.com/thoughts/margin

[[20200314214239-layout-components]] 

#components
#layout