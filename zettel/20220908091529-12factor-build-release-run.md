# 12 Factor: 5. Build, release, run
**Strictly separate build and run stages**

- The _build stage_ is a transform which converts a code repo into an executable bundle known as a _build_. Using a version of the code at a commit specified by the deployment process, the build stage fetches vendors dependencies and compiles binaries and assets.
- The _release stage_ takes the build produced by the build stage and combines it with the deploy’s current config. The resulting _release_ contains both the build and the config and is ready for immediate execution in the execution environment.
- The _run stage_ (also known as “runtime”) runs the app in the execution environment, by launching some set of the app’s processes against a selected release.

The twelve-factor app uses strict separation between the build, release, and run stages.

Every release should have a unique release ID. Releases are append-only, and a release cannot be mutated once its created. Any change must be a new release.

Builds are initiated by developers for code changes. Runtime execution can happen automatically, e.g. server reboots. Try to keep the run stage as light and simple as possible to avoid errors at unfortunate times.

[[12factor]]
[[architecture]]
[[deployment]]
[[infrastructure]]
[[ops]]