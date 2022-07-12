
Not sure what this is yet, but some thoughts on component design

#todo 
#thoughts

## Object props vs compound components
Object props (and list props, sometimes called 'config props') refers to something like `items`, which is an array of items each with their own properties that get rendered by the parent in some way
Compount components are similar to the select/option HTML elements

tl;dr - object props are more consistent, type safe and thus restrictive too. Compound components are more flexible but offer more chance for misuse.

### With object props
- Easier to build
- Harder to pass props to children elements
    - These props may not necessarily be the item API, but something like `tabIndex` or `aria-label`
    - Everything needs to be added to the API
- Might be more simple, but does it scale as well?
    - e.g. if an item can take 20 props, that API starts to become a mess
- Less DOM flexibility
    - Although a render prop can help with that, e.g. renderItem that provides props to spread (using prop getters)
- Locked down: harder to misuse, but also hard to reuse (tradeoffs)
- Can be strongly typed with TS

### With compound components
- More flexible, way more control about how the component is rendered / DOM flexibility
    - Can even provide your own 'smaller' props by hooking into the context or whatever else you need to, rather than the provided component
- How do you restrict the API to not allow footguns?
- How do you access state at the call sites if necessary?
    - e.g. an accordion needs to know whats open
    - Render props?
- Harder to know about the contract between components
- Still writing JSX but state the user doesn't care about (e.g. aria props, etc) can be hidden away without requiring render props/prop getters to access them
- Can be made with cloneElement or context (more flexible)
- Better composition
- Potential for misuse
- Can't be strongly typed
- Potentially better for more complicated components when an array/object data structure becomes too bloated

### Hooks
- Is that an alternative?
    - Allows you to store state at the call site, so it's already 'lifted up'
- Creates 'headless' UI components

[[20210922153924-headless-ui-components]]

https://twitter.com/brad_frost/status/1090733766950223878
https://twitter.com/housecor/status/1405512541846052871

[[components]]
[[react]]
[[reactapi]]