# Single Version Policy

[[nx]] favours what is sometimes called a 'single version policy'. As [[monorepo]] often contain multiple applications, using a single version of all third party dependencies aims to reduce inconsistency between them.

Without a SVP, if you have multiple versions of React (or any other major dependency), how do you ensure two React libraries work together?

Inspired by Google, the goal here is to increase maintainability. There are several major advantages:
- Older apps get security patches 'for free'
- Avoids problems where lower libraries have differing versions between them, breaking the app.
- APIs for developers are consistent
- Ensures after an upgrade that everything works together

However there are some issues, and they seem to get worse at scale.
- Sometimes applications are considered legacy, and not worth upgrading. A single version policy forces work to be done
- Major upgrades need to be co-ordinated across all apps. This can be difficult for core libraries like React across many apps

A single version policy requires more co-ordination, but in theory they help long-term as everything is always up to date. It's a bit of a rock and a hard place - manage updating multiple apps at once vs deal with inconsistent versions.

NX aims to offer both styles by distinguishing between Package-Based Repos and Integrated Repos. The former can have multiple package.json files (and thus dependency versions). This approach is more similar to something like [[npm]] or [[yarn]] workspaces where apps/libs are essentially non-published packages. The latter relies on a single version policy where apps/libs are imported like normal code.

https://opensource.google/documentation/reference/thirdparty/oneversion
https://nx.dev/concepts/integrated-vs-package-based#integrated-repos-vs.-package-based-repos