# React.ComponentType<T> accepts generics

This allows you to set props on components that are passed as props. Otherwise, Typescript will complain that `color` is not an allowed prop on the `icon` prop.
Note that it's not possible to `extend` `React.ComponentType` with an interface to achieve this.

```jsx
type IconProps = React.ComponentType<{ color: CSS.Property.Color }>;

export function PrefixIcon({ icon: Icon }: { icon: IconProps }) {
    return (
        <>
            <Icon color={colors.fiftyFirstShade} />
            <Box marginRight="halfGutter" />
        </>
    );
}
```

#react
#ts