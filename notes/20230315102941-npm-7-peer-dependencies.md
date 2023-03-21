# Peer dependencies change in NPM 7

NPM 7 changes the way peer deps are installed. Previous versions only showed a warning when peer dependencies didn't match. NPM 7 now installs peer dependencies by default, and will fail if a conflict is present.

Using `--force` will ignore the conflict and install the peer dependencies anyway.

Using `--legacy-peer-deps` ignores the peer dependencies, similar to the behaviour of older NPM versions.

[[npm]]