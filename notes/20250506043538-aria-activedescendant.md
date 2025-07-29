# aria-activedescendant

>The `aria-activedescendant` property provides a method of managing focus for assistive technologies on interactive elements when they contain multiple focusable descendants, such as menus, grids, and toolbars. Instead of the screen reader moving focus between owned elements, `aria-activedescendant` can be used on container elements to refer to the currently active element, informing assistive technology users of the currently active element when focused

>With aria-activedescendant, the browser keeps the DOM focus on the container element or on an input element that controls the container element. However, the user agent communicates desktop focus events and states to the assistive technology as if the element referenced by aria-activedescendant has focus.

>This attribute is only relevant on elements with role of composite widget, combobox, textbox, group, or application whose id is referenced as the attribute value.

The main alternative to that is to use a roving tabindex.

>When using roving tabindex to manage focus in a composite UI component, the element that is to be included in the tab sequence has tabindex of "0" and all other focusable elements contained in the composite have tabindex of "-1".

https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#keyboardnavigationinsidecomponents

[[a11y]]
[[html]]