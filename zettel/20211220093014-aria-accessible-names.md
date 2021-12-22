# Accessible names and descriptions

>An accessible name is a short string, typically 1 to 3 words, that authors associate with an element to provide users of assistive technologies with a label for the element

It both conveys the purpose of the element and distinguishes it from other elements on the page. Usually straightforward for most elements, but mistakes can block users of assistive technologies.

All focusable, interactive elements require an accessible name. Additionally, dialogs and some structural containers (e.g. tables and regions) also require a name.
https://www.w3.org/TR/wai-aria-practices/#naming_role_guidance

>An accessible description is also an author-provided string that is rendered by assistive technologies. Authors supply a description when there is a need to associate additional information with an element, such as instructions or format requirements for an input field.

Names and descriptions are presented differently. The former is usually presented before the element type and state, and the latter is presented last, after a slight delay.

The calculation for accessible names and descriptions is quite complicated, and can vary slightly between browsers.

The following are possible techniques for providing names/descriptions:

-   Naming:
    -   Naming with child content.
    -   Naming with a string attribute via `aria-label`.
    -   Naming by referencing content with `aria-labelledby`.
    -   Naming form controls with the label element.
    -   Naming fieldsets with the legend element.
    -   Naming tables and figures with captions.
    -   Fallback names derived from titles and placeholders.

-   Describing:
    -   Describing by referencing content with `aria-describedby`.
    -   Describing tables and figures with captions.
    -   Descriptions derived from titles.

[[20211220093224-aria-accessible-name-rules]]
[[20211220093254-aria-creating-accessible-names]]

[[a11y]]