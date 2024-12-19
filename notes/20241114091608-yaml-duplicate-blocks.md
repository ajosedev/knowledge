# Duplicating/repeating blocks in YAML

There's three things that help here - anchors, aliases, and the merge syntax

Anchors (`&`) set the value
```yaml
key_with_anchor_value: &anchor_name hello
```

Aliases (`*`) read the value
```yaml
key_with_alias_value: *anchor_name
```

This makes the following:
```yaml
key_with_anchor_value: hello
key_with_alias_value: hello
```

Anchors can also be used for lists, for more complicated config:
```yaml
key_with_anchor_value: &list_1
  - anchor_list_item_1
  - anchor_list_item_2
  - anchor_list_item_3
key_with_alias_value: *list_1
```

There's also the merge syntax (`<<`), which I think merges without a key?
```yaml
base: &base_anchor
    name: Everyone has same name

foo:
    # inheriting base
    <<: *base_anchor
    age: 10
```

https://joshdevlin.com/blog/yaml-repeating-sections/