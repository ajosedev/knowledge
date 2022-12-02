# Managing migrations

Some possible pitfalls and solutions to managing migrations.

## Pitfalls
Old patterns keep replicating. Developers often copy what's already present. During a transition it's common to have to keep 'refixing' things, as more problematic (deprecated) code pops up.
Performance degradation. Shipping multiple ways of doing the same thing often has an impact on the user. If a site uses Angular and React, the user has to download both.
Decreased velocity. Transitional states linger, and code gets harder to update and harder to remove. The migration can slow down other things.

## Techniques, best practices, solutions
Distinct phases. Breaking the work down helps track progress and maintain momentum.
Buy in before starting. Most migrations are more than a one person job. Get buy in from other devs, teams, etc. so you don't suffer from a long tail. [[20220808095135-tech-migrations-spotify]]
Static code analysis. Find patterns in bulk and be able to change them through things like [[codemods]].
Lean on automation. Both for changing code and informing people of changes. Things like ESLint rules are helpful here.
Documentation. Keep everyone up to date.

https://frontendmastery.com/posts/frontend-migration-guide/#frontend-library-and-tool-migration-strategies

[[migrations]]
[[refactoring]]