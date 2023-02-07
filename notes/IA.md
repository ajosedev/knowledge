# How I use Obsidian

Keep things generic, i.e. no ties to a specific workplace. I may publish these in the future, and it's better to err on private over public

Obsidian (this vault) is used for Software Engineering. Notion is used for project-management or things tied to my day-to-day.

Topic pages:
- Use `[[tags]]` over `#tags`
- Create topic pages rather than tags
- Use tags for status, rather than topics. This helps the local graph function and allows you to create better 'topic pages'.
	- #todo, #breakdown, #new, #topic-page
- Don't have to create pages for topics until they start to house a fair bit of content (shown in graph)
- Can then create a separate hierarchy of topic pages, e.g. interests -> programming -> javascript
- Topic pages can be fleshed out or just empty, they'll still be links on the graph even if a page doesn't exist

https://theknowledgeworker.substack.com/p/how-to-take-smart-notes-in-obsidian

Use daily notes and later action them into proper notes

Use literature notes for podcasts, videos, articles, etc. and then later action them into proper notes.
Add the title, author, and url to help categorise them.
When done, move them to a separate 'archive' folder

Don't create a structure top-down, create the content and then create the structure for your content (bottom up). Figure out what works for me.

Consistently re-review topics, links, etc. Linking things as you go is the best way of connecting knowledge for the future.

Remember that note taking is a tool to help learn. Don't have to make a note on everything. Nor do the notes have to be perfect.

---

- Review current topic pages
	- What is [[concepts]] for? Feels a bit like a misc bucket. Maybe try to move stuff to a better topic? How does it interact with [[principles]]
	- [[architecture]] seems like a good topic
	- What is [[components]] for? [[reactapi]] too. Maybe need a [[componentapi]]? [[designsystemapi]]? [[api]]?
		- ReactAPI should be for react-only APIs. Hooks, etc.
		- Maybe more things should be componentapi, not reactapi?
	- Make a list of all current topics and see what the hierarchy should be. See what's missing.
	- [[web]] vs [[browsers]]
		- What is [[web]] for?
	- something like [[deployment]] for things like Vercel, AWS, etc.
		- Whats the overarching theme here?
		- Kind of similar to [[architecture]], but not exactly. How does it intersect with [[ops]] or [[infrastructure]]
	- [[infrastructure]] vs [[ops]] vs [[architecture]] vs [[deployment]]
		- should [[deplyment]] be narrower in scope?
		- What about [[rendering]]?
	- what is [[engineering]] for? Feels a little catch-all
	- do I need something like [[areas]] which is a higher level than both [[engineering]] and [[product]]
	- introduce [[devops]]?
	- introduce topics for common tools? e.g. babel, webpack
	- an umbrella for web frameworks? tools? e.g. astro vs nextjs vs remix vs react vs svelte
		- All the web stuff
	- What is [[buildtooling]] for?
	- Change [[ts]] and [[js]] to the full word, to make inline linking easier
- Create more topic pages that have categories and such
- Consider removing zettel (date) prefix
	- Would be better for creating pages link-first
	- Would also help 'unlinked mentions' as it has to match the title
		- Should make better/simpler titles to encourage this?
	- Could also change the titles to not be dash separated?
	- What does it add?
	- How can I get it back if I remove it?
- Go through the graph and try to create more links between things
- Try to make more inline links
- Let notes sit in an 'Ideas' bucket for a while. Can weed out the bad ideas that I don't really need to write down
- Add frontmatter https://help.obsidian.md/Advanced+topics/YAML+front+matter
- Should topic pages also be the introduction? e.g. should [[monoliths]] be combined with [[20221107045937-monoliths]]? same with [[codemods]] & [[20221221020009-codemods]]