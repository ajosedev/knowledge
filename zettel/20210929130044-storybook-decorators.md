# Decorators in Storybook

Storybook decorators are essentially 'wrappers' that wrap a story in extra rendering functionality. They allow for extra markup without needing to create a new template, such as a max-width container, React contexts, etc.

Props passed to the `Story` component are passed as additional arguments to the template function, not as part of its original `args`. To get around this, you can pass the `args` prop: `<Story args={newArgs} />`.

The second argument to a decorator function is the **story context** which in particular contains the keys: args, argTypes, hooks, and more.

```javascript
export default {
  component: YourComponent,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
}
```

https://storybook.js.org/docs/react/writing-stories/decorators