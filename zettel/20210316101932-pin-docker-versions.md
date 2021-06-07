# Pinning versions in Dockerfile/Docker

Pinning versions for Docker dependencies is always a good idea to keep everything as reproducible and static as possible. If you don't pin your Docker versions, the `latest` tag will always be used. This can cause unknown errors that are introduced by a new version of the depdendency, e.g. when running through CI, new builds, or even spinning up new tasks.

You can pin to varying degrees, whether that be major, minor, or patch versions.

#docker
#ops