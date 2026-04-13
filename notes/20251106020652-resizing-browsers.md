# Resizing browsers & breakpoints

Anecdotally, people tend to design for things to break at distinct breakpoints. Part of the reasoning for that is that they don't want things 'jumping around' at different viewport sizes.

My problem with that: I don't think users actually resize their browser much. Sure, we have to design for many different viewport sizes, but adjusting at specific, shared breakpoints doesn't help with that. In fact it can even work against that, as `breakpoint + 1px` often looks poor compared to the breakpoint itself, where everything shifts.

Even if they are resizing their browser, they're going from A -> B, not A -> A1 -> A2 -> A3...

So the problem is two-fold:
1. Designing for bespoke breakpoints often leaves awkward designs in between those breakpoints, as they are not considered
2. Reflowing your page at specific breakpoints doesn't solve anything, as users don't resize their browser once the page is loaded (anecdotally)

This is why [[intrinsicdesign]] likes to move away from the idea of breakpoints

https://viewports.fyi/

[[design]]
[[intrinsicdesign]]
[[responsivedesign]]