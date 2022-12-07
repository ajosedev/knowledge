# Component islands architecture

>The islands architecture encourages small, focused chunks of interactivity within server-rendered web pages

Pages are server-rendered, but contains small sections of progressively enhanced HTML with a sprinkling of Javascript for client side interactivity. Rather than a single entry point, slots are filled with dynamic regions. The slots could be a header app or similar, which are also server rendered then [[20221130103211-hydration|hydrated]] on the client.

The key is to use as much server rendered HTML as possible. Only add Javascript when strictly necessary. This way, no hydration is required for non-interactive sections. The rest can use progressive hydration.

Advantages:
- Better performance
- SEO, due to server rendering
- Accessibility, as we're using static HTML

Disadvantages:
- Architecture is difficult to setup. Usually relies on something like Astro or Marko
- Not helpful for highly interactive pages, due to the number of islands reqired.

Although this is similar to microfrontends, the islands architecture requires the composition of the independent units is handled on the server, and sent to the user through raw HTML.

![[Islands.png]]

https://www.patterns.dev/posts/islands-architecture/
https://jasonformat.com/islands-architecture/

[[architecture]]
[[infrastructure]]
[[microfrontends]]
[[microservices]]
[[rendering]]