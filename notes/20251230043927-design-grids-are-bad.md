# Why design grids are bad

'Design grid' or just 'grid' in this document refers to the n-column grid designers use, not something like CSS Grid.

Grids were originally created for print, where the content and the layout are connected together. Don't have to deal with different screen sizes, font sizes, zooms, dynamic content, etc.

When the layout changes (e.g. going from a billboard to a flyer), designers then change the content. Then it stays linked together like that forever. It's static.

Browsers are not like that. Browsers have a specified content, but less control over the layout. Someone may view your website on the equivalent of a billboard, and someone else the equivalent of a flyer. That's hard to handle.

This is what kicked off responsive design. Maintaining different layouts for the same content, so you could handle different screen sizes. Responsive design means designers design with specific breakpoints and dimensions. However, no-one properly designs the in-between sizes.

Intrinsic design tries to remedy this gap. It's content-driven design. It handles the unideal states - what if the content is more than one word, in a different language, the font size gets bigger, etc.
>Layouts shouldn’t shift because of the device size, it should shift due to the content not fitting in the current layout.

When you adopt this approach, an overlaid design grid starts to make less and less sense. Things no longer fit in these discrete boxes. The variations in content within these components need to become more content-aware.

Elements don't equally shrink together. Using a n-column grid means that every column shrinks and grows equally. Often more consideration is required, such as shrinking down the gap between them, or shrinking one column at a faster rate than another. For a more extreme example: given a layout of text (3 columns), gap (4 columns) and an image (7 columns), shrinking the viewport size will immediately make the text wrap more before the gap is relatively shrunk. Some elements scale, other element's shouldn't.

Content should be prioritised. An n-column grid considers everything in equal, when in reality they are most often non-equal.

Design grids can be helpful as guides, but they don't work as a model to actually build a page. And that's before you get to the actual nuts and bolts of how you expect semantic HTML to translate a design grid to a browser (spoiler: you pretty much can't).

Note that CSS Grid can better replicate the n-column grid, but that doesn't mean it solves the problems. Rather CSS Grid should be used to create content that should stay in columns or grids, which is usually not an entire page.
Paradoxically, CSS Grid shines in creating intrinsic layouts, allowing for content to wrap to new rows, dynamic column sizes, extra flexibility, etc.

https://gridless.design

[[design]]
[[intrinsicdesign]]
[[layout]]
[[responsivedesign]]