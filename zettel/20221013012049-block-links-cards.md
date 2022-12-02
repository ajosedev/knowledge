# Block links, and interactive cards

Cards are usually the visual embodiment of block links, but it's not always a card. Anything 
that gives it a 'block-like' click target, or expands the clickable region falls into this area too.

Usually they are accomplished by wrapping everything in an `a`. However there's a fundamental problem: Putting everything within a `label`, `a`, or `button` makes the inner content act as a single label.

There are other issues too, around valid HTML, and keeping semantics, depending on what element your content is nested in. It gets more complicated if there are multiple intractable within the block link. e.g. the card itself is clickable, but another link exists inside for an author.

There's a couple of solutions. Most of them have issues with text selection, as selecting text inside an interactive element is tricky. Additionally you have to ensure that the visual affordance matches the behaviour, which depends on the solution.

**Just don't do it**
The simplest solution. This can be preferred when there are multiple click targets, as making the best UX also becomes tricky, beyond just accessibility.
Note that elements can be layered on top of other elements, using something like `position: relative`. https://www.sarasoueidan.com/blog/nested-links/

**Pseudo-element**
Use a pseudo element to make the main CTA have a click area equivalent to the size of the card. Doesn't rely on Javascript, but makes selecting the text difficult.

**Redundant click event**
Create an event listener for the card to act as a proxy for the link. Due to event bubbling, clicking the link itself may trigger two events, which you'll have to handle.

https://inclusive-components.design/cards/
https://adrianroselli.com/2020/02/block-links-cards-clickable-regions-etc.html
https://css-tricks.com/block-links-are-a-pain-and-maybe-just-a-bad-idea/#comment-1755105

Keywords: Block links, selectable cards, radio cards, checkbox cards, interactive cards, clickable cards

[[a11y]]
[[components]]
[[componentapi]]
[[css]]
[[design]]
[[js]]
[[ux]]