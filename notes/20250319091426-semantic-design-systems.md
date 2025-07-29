# The value of semantics in design systems

I think 'semantics' is generally a large part of the value in design systems. Put another way, semantics are the things that prescribe meaning to a solution. `brand-blue` is more prescriptive and provides meaning, much moreso than `#04318a`.

However it goes beyond colours, and even tokens. Components, fonts, icons, layouts, etc. all can be injected with semantics. This provides three main advantages:
- Communication - it's a lot easier to talk in terms of something with meaning than arbitrary values or code names
- Choice - if your semantics are named well enough, the decision of what to choose should be trivial, even with a lack of knowledge
- Maintenance - the actual HEX colour of `brand-blue` shouldn't matter. Assuming everyone is thinking semantically, updates to the value should be seamless

Use semantics as much as you can to get 'free' alignment. The easiest way to get everyone aligned is by making the choice as easy as possible.

I think there's a [[smells]] when someone refers to something by a 'semantic name', but that semantic isn't codified. This often leads to communication issues. The two parties have what they think is a standard term, but could be talking about different things, glossing over assumptions, or leaving out important context, particularly around ownership and the source of truth.

[[designsystem]]