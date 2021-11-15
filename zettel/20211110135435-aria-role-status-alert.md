# ARIA roles: status & alert

`status`
> A type of live region whose content is advisory information for the user but is not important enough to justify an `alert`, often but not necessarily presented as a status bar.
Have an implicit `aria-live` of `polite`

`alert`
> A type of live region with important, and usually time-sensitive, information. See related `alertdialog` and `status`.
Have an implicit `aria-live` of `assertive`

Neither should shift focus, and neither should require a user to close them.

If focus should move to a message, an `alertdialog` is better suited.

https://w3c.github.io/aria/#alert
https://w3c.github.io/aria/#status

[[a11y]]