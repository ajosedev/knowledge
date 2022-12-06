# Icon Button components

Since icon-only buttons don't have an inbuilt accessible name (i.e. the text content inside the button), we must specifically add this later. Thankfully it's pretty easy, just do one of:
- Visually hidden text [[20210224115650-a11y-hidden]]
- `aria-labelledby` with visually hidden text
- `aria-label` on the `button` element

https://www.sarasoueidan.com/blog/accessible-icon-buttons/

[[a11y]]
[[components]]