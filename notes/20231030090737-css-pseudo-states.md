# CSS Pseudo states

Pseudo states, such as `:hover` and `:focus`, are a little weird when it comes to interactivity.

Firstly, there's `:focus-visible`, which has it's own nuance to it: [[20220801121830-focus-visible]]

Besides that, these are pretty self explanatory on desktop. However there's two areas of confusion: mobile, and ordering.

Ordering pseudo classes on links should follow a specific order to make sure they apply at the correct time, as they do have overlap. [[20231026053906-lvha-order]]

Mobile gets even weirder. The behaviour is inconsistent across different browsers, but a browser will usually apply unintuitive pseudo classes such as `:hover`. 
**Usually a mobile browser will add both the hover and focus state to an element after it's been tapped**. This behaviour has a historic or compatibility reason - e.g. to support menus that are only made to be open on hover.
My understanding is that depending on the element type, the active state will be visible during the tap, but also visible _after_ the tap, similar to hover and focus.

>On most mobile browsers _hover_ and/or _focus_ states will apply to an element after it's been tapped.
https://web.dev/articles/add-touch-to-your-site

https://bitsofco.de/when-do-the-hover-focus-and-active-pseudo-classes-apply/

As of now I'm unsure how these states work with `:focus-visible`.

[[20230606112413-media-hover]]