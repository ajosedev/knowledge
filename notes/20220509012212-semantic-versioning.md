# Semantic versioning
Semantic versioning, or Semver, is a versioning scheme to communicate the changes included in a version release.

Major.Minor.Patch, e.g. `1.2.4`.

Major - incompatible API changes (breaking changes)
Minor - Adding features that are backwards-compatible
Patch - Bug fixes that are backwards-compatible

A breaking change does not necessarily mean a new feature.

A quick gotcha: a verion number can't have a leading zero. This is especially important for packages that use date-marked versions. `2023.06.10` is invalid, `2023.6.10` is valid.

[[concepts]]
[[dependencies]]
[[npm]]