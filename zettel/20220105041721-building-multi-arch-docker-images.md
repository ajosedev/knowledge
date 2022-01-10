# Building multi-arch docker images

`docker buildx build --no-cache --platform linux/amd64,linux/arm64 -t name:tag`

Using `buildx`, we can build multi-arch images, specifying the platforms with the `--platform` argument.

Note that when specifying multiple platforms, it's not possible to add these to `docker images`, even when specifying `--output type=docker`, as it's not compatible with multiple manifests. Instead, you must build to a different output type, or push directly to the registry with `--push`.

You can inspect images with `docker manifest inspect`.

https://www.docker.com/blog/multi-arch-build-and-images-the-simple-way/

[[arm64]]
[[docker]]