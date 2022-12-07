# Updating React context with a component's children

It's possible to update a context through a component's `children` prop. Although this isn't a common requirement, it can be helpful for updating a component higher in the tree without having to use the context API explicitly.

`react-helmet` uses this to allow merging content and properties regardless of where the component is repeatedly rendered in the tree. Depending on the API of the component, this could support multiple renders of the context-updating component.

The below example shows setting a heading that be consumed by a page-level `Header` component or similar, which would also read from `HeadingContext`.

```jsx
const ACCEPTABLE_TYPES = ['string', 'number']

function Heading({ children }) {
  const { setHeading } = useHeadingContext()

  React.useEffect(() => {
    if (ACCEPTABLE_TYPES.includes(typeof children)) {
      setHeading(children)
    }
  }, [children, setHeading])

  return null
}

// Now we can use that component _anywhere_ to update the heading
function SomePage({ children }) {
  return (
    <main>
      <Heading>This page's title</Heading>
      {children}
    </main>
  )
}
```



[[react]]
[[reactapi]]