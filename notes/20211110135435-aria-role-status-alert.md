# ARIA roles: status & alert

`status`
> A type of live region whose content is advisory information for the user but is not important enough to justify an `alert`, often but not necessarily presented as a status bar.
Have an implicit `aria-live` of `polite`

`alert`
> A type of live region with important, and usually time-sensitive, information. See related `alertdialog` and `status`.
Have an implicit `aria-live` of `assertive`

An advantage to using a live region role over `aria-live` is that **live region roles accept an accessible name.** e.g. you can link the element with the role to some contextual headings with `aria-labelledby` and both will be read.

Neither should shift focus, and neither should require a user to close them.

If focus should move to a message, an `alertdialog` is better suited.

[[20250328114054-aria-live]]

https://w3c.github.io/aria/#alert
https://w3c.github.io/aria/#status

[[a11y]]