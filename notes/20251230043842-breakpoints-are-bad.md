# Breakpoints are bad

Breakpoints go against [[20251030063907-intrinsic-design]], and they should be avoided as much as possible.

Content should be dictating the layout, and layout should adjust to the available space. Not the other way around.

Breakpoints allow for the design to look good at a specific width(s), but neglects the widths inbetween those specified ones. Furthering that, they don't necessarily match the required content on the page. Even if you were to use breakpoints, one page might require different breakpoints to better adjust the content on that specific page.

A very obvious example of this is when you're on 1px away from a breakpoint. Why should content look terrible on 721px, but then be refined on 720px? The numbers are often arbitrary, with different devices falling on either side of the breakpoint. So you often aren't actually catching the majority of the users that would want that similar styling.

Going even further, ideally QA would be done at random viewports, not ones matching your breakpoint. That would be a better representation of the randomness of user viewports, and further supports the idea of breakpoints not being an optimal solution.

Similarly what if the user's viewport is an ultrawide? It doesn't make sense for content to go full width, so there's often a max width for the page, and then automatic horizontal margins on either side.
If we're doing that for this case, why don't we use that mindset more often? Let the content dictate how it should be laid out.

gridless.design says this about breakpoints and responsive design.
>This opened up the possibility for one page of content to have different layouts, responding to the viewport size. The problem with this approach is it goes against content-first design. Content should be dictating the layout and layout should adjust to the available space. This means that smaller components of the page need to respond to the size of their closer ancestors. Changing the layout of buttons in a card isn’t because the page size is small, it’s because the card size is small.

[[20211115081243-container-queries]] are definitely better than breakpoints, but you can often go further and not even need a container query. Container queries are quite explicit (read: imperative) when you can often be even more declarative (read: intrinsic design) with things like [[flexbox]], e.g. [[20210830102331-flexbox-holy-albatross]].

Hence, intrinsic design. Let the content figure out how it should be laid out.

[[browsers]]
[[css]]
[[designsystem]]
[[intrinsicdesign]]
[[layout]]
[[responsivedesign]]