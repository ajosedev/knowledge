# React Suspense rendering loop

Copied from the React docs.

```tsx
// This is not a Promise. It's a special object from our Suspense integration.
const resource = fetchProfileData();
function ProfilePage() {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <ProfileDetails />
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <ProfileTimeline />
      </Suspense>
    </Suspense>
  );
}

function ProfileDetails() {
  // Try to read user info, although it might not have loaded yet
  const user = resource.user.read();  return <h1>{user.name}</h1>;
}

function ProfileTimeline() {
  // Try to read posts, although they might not have loaded yet
  const posts = resource.posts.read();  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}
```


Here’s what happens when we render `<ProfilePage>` on the screen:

1. Request starts in `fetchProfileData()`. It gives us a special “resource” instead of a Promise.
2. React tries to render `<ProfilePage>`. It returns `<ProfileDetails>` and `<ProfileTimeline>` as children.
3. React tries to render `<ProfileDetails>`. It calls `resource.user.read()`. None of the data is fetched yet, so this component “suspends”. React skips over it, and tries rendering other components in the tree.
4. React tries to render `<ProfileTimeline>`. It calls `resource.posts.read()`. Again, there’s no data yet, so this component also “suspends”. React skips over it too, and tries rendering other components in the tree.
5. There’s nothing left to try rendering. Because `<ProfileDetails>` suspended, React shows the closest `<Suspense>` fallback above it in the tree: `<h1>Loading profile...</h1>`. We’re done for now.

This `resource` object represents the data that isn’t there yet, but might eventually get loaded. When we call `read()`, we either get the data, or the component “suspends”.

**As more data streams in, React will retry rendering, and each time it might be able to progress “deeper”.** When `resource.user` is fetched, the `<ProfileDetails>` component will render successfully and we’ll no longer need the `<h1>Loading profile...</h1>` fallback. Eventually, we’ll get all the data, and there will be no fallbacks on the screen.

This has an interesting implication. Even if we use a GraphQL client that collects all data requirements in a single request, _streaming the response lets us show more content sooner_. Because we render-_as-we-fetch_ (as opposed to _after_ fetching), if `user` appears in the response earlier than `posts`, we’ll be able to “unlock” the outer `<Suspense>` boundary before the response even finishes.

---

All of this results in a UI that avoids waterfall-ing and setting dependencies. Data isn't reliant on other data retrieval, nor is it dependent on the component being rendered. This achieves a different UX for the user. Individual parts of the page render as soon as they can, rather than the entire page rendering at once.

[[react]]
[[reactsuspense]]