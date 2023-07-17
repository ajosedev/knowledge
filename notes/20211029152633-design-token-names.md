# Design token naming

The naming scheme for your design tokens is important, this is what people will be using to communicate, guide, and write in both design tools and code. Try to keep it concise while still conveying meaning.

Also known as a 'token hierarchy'

![[design-token-naming.png]]

> **Base** levels as a token’s backbone that combine _category_ (for example, `color`), _concept_ (`action`) and _property_ (`size`).
> **Modifier** levels to refer to one or more of _variant_ (`primary`), _state_ (`hover`), _scale_ (`100`), and _mode_ (`on-dark`).
> **Object** levels to refer to a _component_ (`button`), _element_ within a component (`left-icon`), or _component group_ (`forms`).
> **Namespace** levels combining any (or all, in extreme cases!) of _system_ (`esds`), _theme_ (`ocean` or subbrand), or _domain_ (`retail`).

`namespace-object-base-modifier`

A single token doesn't need every level. Describe the intent [[20220523102023-design-tokens-as-intents]]

## Base levels
### Category
Avoid homonyms. Words such as `type` convey two different meanings: 'typography', and 'categorisation'.

### Property
Category + property pairs are very general and not useful. We need to add concepts and modifiers.

### Concepts
Adding a concept like `action`, `feedback`, or `body` makes tokens more useful. Consider how you divide your concepts to avoid overlap.

## Modifiers
### Variant
Variants may have different distinctions depending on the concept. Text may have `primary`, `secondary`, etc. But feedback offer `success`, `error`, etc.

Adding properties to your variants make them more specific, but less flexible. Consider `color-success` vs `color-text-success`.

### State
Usually describes interactivity

### Scale
Different scales are used for different things. Consider t-shirt sizes, proportions, etc.

### Mode
Usually for things like `light` and `dark`.

Consider if you need the default to be explicit or implicit, e.g. `color-action-secondary-onl-light` vs `color-action-secondary`.

### Objects
Tokens are reusable across a component library. However tokens may also be reusable across a few components or within a single component.
Consider if you're tokenising for a component, element, or component group (e.g forms).

When doing so, make sure to not globalise prematurely [[20211115112656-rule-of-three]]. Create component-level tokens within a component, and then extract higher if needed.

Having tokens for individual objects helps enable localised change [[20211029153348-semantic-design-tokens]]

## Namespaces
Namespaces may not be necessary.

Useful for themes, brands, etc. Can even extend to a domain.

Also useful to avoid global styling problems with tools like SASS.

https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676
---

Some examples for colour:
Asana uses `sentiment-usage-prominence-interaction`, e.g. `warning-text-default-hover`
Salesforce uses `component-category-property-attribute-relationship-state`

[[designsystem]]
[[designsystembranding]]
[[designtokens]]