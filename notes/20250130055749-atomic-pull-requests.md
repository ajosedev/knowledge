# Pull requests should be atomic

Ideally, Pull Requests should be as atomic as possible. They have a focused scope, minimal size, and look to fix/improve/etc **one thing**. There are several benefits:
 - smaller PRs are easier to review
 - focused PRs are less likely to introduce bugs to something seemingly unrelated
 - faster feedback loops
 - easier to revert, if needed

This is sometimes tricky to balance with the [[20220801125707-boy-scout-rule]], but the benefits of keeping things separate outweigh the negatives.

https://graphite.dev/guides/best-practices-managing-pr-size

A lot of this is similar to the idea behind atomic commits, which share the same benefits.
[[20240916035242-good-commits]]

[[20221021011247-make-the-change-easy]]

[[engineering]]
[[principles]]