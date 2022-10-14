# Block links, and interactive cards

Cards are usually the visual embodiment of block links, but it's not always a card. Anything that gives it a 'block-like' click target, or expands the clickable region falls into this area too.

#todo 
- What they are
- What's the problem
	- **Fundamental problem: Putting everything within a `label`, `a`, or `button` makes the inner content act as a single label**. There are other issues too, around valid HTML, and keeping semantics, depending on what element your content is nested in.
	- Screen readers
	- Content order
	- Multiple links/CTAs/etc
- What are some solutions?
	- What do they do to text selection
	- Just don't do it?
	- Pseudo element
	- Event listener
	- Layering elements on top
		- z-index not needed

https://inclusive-components.design/cards/
https://adrianroselli.com/2020/02/block-links-cards-clickable-regions-etc.html
https://css-tricks.com/block-links-are-a-pain-and-maybe-just-a-bad-idea/#comment-1755105
https://www.sarasoueidan.com/blog/nested-links/

Keywords: Block links, selectable cards, radio cards, checkbox cards, interactive cards, clickable cards

[[a11y]]
[[components]]
[[componentapi]]
[[css]]
[[js]]