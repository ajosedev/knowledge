# Design systems are for UI

Although [[20211122111728-design-system-multiple-systems|design systems contain multiple systems]] they shouldn't contain every system you have.

Throwing things like brand guidelines, content guidelines, processes, etc in a design system can quickly muddy the waters and create confusion. Although these systems are important, they should live somewhere else.

Design systems should handle everything related to common interface patterns that can be used organisation-wide. **This effectively adds an asterisk to supporting every other system, and instead supports that part of the system that matters for user interfaces.**

e.g. content guidelines *for user interfaces*.
e.g. The design system cares about **photography guidelines** coming from the brand department insofar as those guidelines impact how photography flows through heros, cards, and other UI components that house photography.

It shouldn't necessarily define or own those standards, but instead maintain a relationship between those standards. This also helps in ownership and maintenance, a design system team probably aren't creating brand guidelines, so it doesn't make sense for them to own or maintain it. Note that this means that a design system team often requires collaboration with a branding team, to help facilitate these changes and flow branding through to the UI.

> A design system is the official story of how an organization designs and builds digital **interfaces** (not products).

Content is anecdotally the trickiest one to frame, as most of it is always tied into UI. e.g. a page always contains large amounts of copy.

https://bradfrost.com/blog/post/design-systems-are-for-user-interfaces/

[[designsystem]]