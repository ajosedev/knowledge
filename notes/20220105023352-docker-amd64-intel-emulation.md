# Building Intel Docker images for ARM64

Instead of building a multi-arch image, or an ARM64 image, it's possible to run an Intel image (AMD64) under emulation. To do this, build the docker image using:

`docker build buildx --platform linux/amd64`

Note that the emulation isn't perfect and some things may fail - it's considered 'best effort' only.

[[arm64]]
[[docker]]