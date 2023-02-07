# Copying a file to multiple places

By default `cp` can't copy a single file to multiple destinations. However, we can use `fd` as mentioned in [[20210809154737-batch-execution-fd]] to do so.

Something like the following works well:
```sh
fd * -x cp <originalfile> .
```

This will copy the file into all the destinations returned by `fd`.

[[shell]]