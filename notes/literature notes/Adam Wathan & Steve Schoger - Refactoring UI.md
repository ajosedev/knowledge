# Refactoring UI

Author: Adam Wathan, Steve Schoger
Read: 2020?

#breakdown

Design in grey scale first. Helps you focus on achieving good spacing, contrast, and sizing, rather than relying on colour. Then colour can be added later to improve it further

Don't design what you can't build yet. Don't include features that are somewhere on the roadmap

Border radius can be surprisingly important. Less rounded can feel more formal

Define systems in advance. Spending the time at the start helps you reduce decision making time on each feature later. Systems for colour are obvious, but also make them for fonts, spacing, sizes, shadows, etc.

Emphasising (and deemphasising) is very important. It helps things feel "designed" and thought out. Can be accomplished in many ways, including: sizing, font weights, colours, opacity

Labels should generally be used as a last resort (not for forms or for tabular/definition content). Information is usual contextually relevant and obvious, an 'Email' label is usually unnecessary. Better solutions are to remove them, use them as part of the copy, or deemphasise them.

Visual hierarchy != Document hierarchy. H1 in code can be small visually, and sometimes an H1 shouldn't be the focus

Button hierarchy is important. Make primary action obvious and then each successive action less obvious. Destructive actions can usually be as simple as looking like a link

Always start with way more whitespace than you think you need, then remove it. This usually results in a nicer, less cramped design.

Similarly, don't fill the entire screen. Spreading things out or making them full width can make it harder to use. Can just centre instead.

Things don't need to scale proportionally, sometimes large elements need to shrink faster than smaller elements, so having a relative scale between headings and body text may not work.

Ignore typefaces with less than five weights - these tend to be poorer quality and less detailed

Align mixed font sizes on their baseline, not on their vertical centre.

Line-height and font size are inversely proportional, but 1.5 for line-height is a good default. Larger sizes can do with less line height as it's easier to see where the text wraps to.

Don't center align long amounts of text, it will look better left aligned (assuming English). However numbers should generally be right aligned

All caps text can look better with some additional letter spacing

A good colour scheme is more than five colours. You need greys ranging from near black to white (8-10 shades), primary colours (5-10 shades), and accent colours. These shades should be defined initially, as part of your colour system.

Greys don't have to be grey. There can be warm greys, cool greys, etc.

Flipping white text on a dark coloured background to dark coloured text on a light coloured background can fix contrast/accessibility issues

Never use colour as the only means of communication, it's not accessible. Use it to support other means.

Icons don't necessarily scale up as they can lack detail, even if they're vectors. Placing them inside a larger shape can help fill the space but keep the icon looking good. Similarly, icons scaled down can be too complex, and should be simplified.

Add colour through accent borders, top of cards, under current page/state, one side of a box, etc.

Empty states are important and need to be considered, not just the idealistic version of your website. They can be the first thing most people see, so put thought into them.

Try to use fewer borders, as an alternative use box shadows, extra spacing, contrasting backgrounds, etc.

[[design]]
[[designsystem]]
[[ux]]
