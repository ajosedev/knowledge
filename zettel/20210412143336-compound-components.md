# Compound components in React

Compound components are a pattern that's similar to the `select` and `option` pattern in HTML. This pattern helps create a more flexible and expressive API, that allows for far more variations than a standard pattern. Think of a Modal component that requires props to style the close button, or style the heading, etc.

Another positive about compount components, is that you can create a component that exposes a simpler API (think a particular variant) from a basis of flexible compound components - this doesn't work the other way around. It's easier to make the underlying componentry flexible and then expose a subset, its much harder to do it the other way around (too many props, prop drilling, etc.)

Two main methods of sharing state between related components:
- React.cloneElement
- Context

An example:
```javascript
<Modal>
  <ModalOpenButton>
    <Button variant="secondary">Register</Button>
  </ModalOpenButton>
  <ModalContents aria-label="Registration form" title="Register">
    <LoginForm
      onSubmit={register}
      submitButton={<Button variant="secondary">Register</Button>}
    />
  </ModalContents>
</Modal>
```

TODO:
compound components (clone)
compound components (context)

#react