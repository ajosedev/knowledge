# Tracking metrics for a design system

Top-down (rendered site) vs bottom-up (lines of code) can give different info.
Hard to tell where components are used and how often when looking at the latter. e.g. a single component could be used in many places, or even no places.

Getting the right metrics is important. Surveys are useful for subjective satisfaction scores [[20220328020035-sus-and-umux]], but hard data is more difficult. Metrics should be tied to your principles and goals. e.g. if consistency is one of your principles, try to measure consistency.

Most ways of getting metrics are using [[staticcodeanalysis]]. The most popular tool at this time is https://github.com/moroshko/react-scanner. This can easily get you some results on components and props. For other things such as token usage, tools like [[eslint]] can be useful.

Using a [[20220829125502-visual-regression-testing]] approach could be interesting. If you have an [[20230922035934-design-system-overlay]], you could run snapshots across the live site and get a visual on what's using what, and how it changes over time.
	This isn't necessarily 'hard' data, but may be useful
	This can be useful for tracking [[migrations]] and deprecations.

Remember that it's not feasible where all components on a page our design system components. Be realistic about what can be achieved, and set your goals appropriately. [[20220801105616-break-out-design-system]]

It can be useful to track metrics per team, or per domain
	Per domain can help inform if your design system is catered towards particular domains. Are you missing components that a certain domain needs?
	Per team can help inform you that you need to do stakeholder management. Does this team not know about the design system? Is there a reason they're not using it?

Metrics can have different goals, so it's important to figure out what you want
	e.g. tracking the total amount of uses for a given component may not be very useful. However, it does provide information that could make it easier to deprecate said component if it's largely unused.
	Additionally, it can help track migrations and use over time.

[[figma]] has it's own internal metrics - 'Library analytics'. This can help you see where components are used, what is detached, etc. In general, Figma can also act as a good API to gather information before it even makes it to code.
https://www.figma.com/blog/how-pinterests-design-systems-team-measures-adoption/

Some ideas for metrics:
- Time to onboard a designer
- Amount of questions asked by engineers to a designer
- Time spent creating components for designs by a designer
- Percentage of the codebase using tokens
- Percentage of the codebase using components
- Time spent upgrading to new versions
- Amount of snowflakes in code (looking at CSS classes or similar)
- Amount of custom CSS required, i.e. not using tokens, or overriding existing styles
- Amount of uses for a given component
- Amount of uses for a given token
- Contributors to the design system
- Percentage of up to date documentation
- Amount of internal components using non-token values
- Current versions in use
- Percentage of deprecated components/etc in use

[[20220509012517-design-system-adoption]]

https://danmall.com/posts/design-system-coverage/
https://www.productboard.com/blog/how-we-measure-adoption-of-a-design-system-at-productboard/
https://didoo.medium.com/measuring-the-impact-of-a-design-system-7f925af090f7
https://segment.com/blog/driving-adoption-of-a-design-system
https://engineering.talkdesk.com/metrics-that-matter-measuring-the-impact-of-the-cobalt-design-system-part-ii-20ea2c131be1
https://www.twilio.com/blog/insights-metrics-inform-paste-design-system

[[adoption]]
[[designsystem]]
[[product]]