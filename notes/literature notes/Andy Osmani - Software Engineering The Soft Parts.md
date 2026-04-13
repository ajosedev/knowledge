# Software Engineering - The Soft Parts

Author: Andy Osmani
Read: 31/12/25
https://addyosmani.com/blog/software-engineering-soft-parts/

---

```
#### Technical mastery implies a high ratio of value shipped to hours worked.

This means you can discern tasks that add value and help your team focus their energy in that direction. It also means you know how to avoid work that doesn’t provide the team/company value - the best engineers can even steer whole teams away from work that isn’t that useful. Work on what matters most.

I often get asked, “How do I know if I’m making the best use of my time?”. There will almost always be tasks you can fill your time with to “feel” busy. The real trick here is making sure you are working on the right things. If you want to move mountains, focus on tasks that move the needle, even if that movement is small.

Some questions you can ask yourself:

- What are my goals? Are the tasks I’m focused on lining up with those goals?
- Could there be something I could do differently or better?

Even asking yourself such questions can be extraordinarily powerful.
```

```
### Think critically and formulate well-reasoned arguments

#### Critical thinking is the ability to use cognitive skills to think independently in order to make thoughtful decisions. Invest in this skill to improve your clarity of thought.

As engineers, we can sometimes rush to solve a problem right away so it feels like we’re making progress or looks like we’re being responsive to stakeholders. This can introduce risks if we aren’t fully considering causes and consequences. Put another way, critical thinking is thinking on purpose and forming your own conclusions. This goal-directed thinking can help you focus on root-cause issues that avoid future problems that arise from not keeping in mind causes and consequences.

In broad strokes, some of the questions I like to ask based on critical thinking are:

- How do we know we’re solving the right problem?
- How do we know we’re solving the problem in the right way? (i.e. balancing rigor and efficiency, given our understanding of the problem and constraints)
- If we don’t know the sources of our problem, how can we determine the root cause?
- How can we break the key question down into smaller questions that we can analyze further?
- Once we have one or more hypotheses, how do we structure work to evaluate them?
- What shortcuts might we take if we’re under constraints (time pressure) without unduly compromising our analytics rigor around the question?
- Does the evidence sufficiently support the conclusions?
- How do we know when we are done? When is the solution “good enough”?
- How do I communicate the solution clearly and logically to all stakeholders?

I’ve found these questions often help. Sometimes we’ll address the symptom of a problem, only to discover there are other symptoms that pop up. At other times, we might quickly ship a solution that creates more problems later down the road. With a lens on critical thinking, we might challenge assumptions, look closer at the risk/benefit, seek out contradictory evidence, evaluate credibility and look for more data to build confidence we are doing the right thing.

For example, a common mistake I’ve seen engineers make is assuming correlation implies causation (i.e. just because two things correlate does not necessarily mean that one causes the other). A critical thinker might push back on assumptions such as this, asking why we believe them to be true.

Critical thinkers:

- Raise mindful questions, formulating them clearly and precisely
- Collect and assess relevant information, validating how they might answer the question
- Arrive at well-reasoned conclusions and solutions, testing them against relevant criteria and standards
- Think open mindedly within alternative systems of thought, recognizing and assessing, as need be, their assumptions, implications, and practical consequences
- Communicate effectively with others in figuring out solutions to complex problems

Note: Critical thinking has [both aspects](https://www.learningscientists.org/blog/2021/3/25-1) of being a “soft skill” and a “hard skill”, so is included in this write-up.
```


```
As engineers, we can sometimes rush to solve a problem right away so it feels like we’re making progress or looks like we’re being responsive to stakeholders. This can introduce risks if we aren’t fully considering causes and consequences. Put another way, critical thinking is thinking on purpose and forming your own conclusions. This goal-directed thinking can help you focus on root-cause issues that avoid future problems that arise from not keeping in mind causes and consequences.

In broad strokes, some of the questions I like to ask based on critical thinking are:

- How do we know we’re solving the right problem?
- How do we know we’re solving the problem in the right way? (i.e. balancing rigor and efficiency, given our understanding of the problem and constraints)
- If we don’t know the sources of our problem, how can we determine the root cause?
- How can we break the key question down into smaller questions that we can analyze further?
- Once we have one or more hypotheses, how do we structure work to evaluate them?
- What shortcuts might we take if we’re under constraints (time pressure) without unduly compromising our analytics rigor around the question?
- Does the evidence sufficiently support the conclusions?
- How do we know when we are done? When is the solution “good enough”?
- How do I communicate the solution clearly and logically to all stakeholders?

I’ve found these questions often help. Sometimes we’ll address the symptom of a problem, only to discover there are other symptoms that pop up. At other times, we might quickly ship a solution that creates more problems later down the road. With a lens on critical thinking, we might challenge assumptions, look closer at the risk/benefit, seek out contradictory evidence, evaluate credibility and look for more data to build confidence we are doing the right thing.

For example, a common mistake I’ve seen engineers make is assuming correlation implies causation (i.e. just because two things correlate does not necessarily mean that one causes the other). A critical thinker might push back on assumptions such as this, asking why we believe them to be true.

Critical thinkers:

- Raise mindful questions, formulating them clearly and precisely
- Collect and assess relevant information, validating how they might answer the question
- Arrive at well-reasoned conclusions and solutions, testing them against relevant criteria and standards
- Think open mindedly within alternative systems of thought, recognizing and assessing, as need be, their assumptions, implications, and practical consequences
- Communicate effectively with others in figuring out solutions to complex problems
```




```
The best software is built by engineers who have empathy for their users.

Business success depends on customer satisfaction which often translates to user experience in the case of software. Understand how the end-users experience the product or service. Make sure your solutions do not hamper their ability to do their jobs efficiently. If you are in a position that allows you to interact with end-users directly, attempt to understand their needs and pain points better.
```



```
Be curious and never stop learning
Write about what you learn. It pushes you to understand topics better. Sometimes the gaps in your knowledge only become clear when you try explaining things to others. It's OK if no one reads what you write. You get a lot out of just doing it for you.

Learning should be a continuous process - people who claim to know everything about a particular technology are often not experts. Real experts are proficient with the technology but realize there is always scope for learning and improvement. Curiosity drives learning - so if you are curious about a new framework, google it, read the docs, try the tutorials, read the source! Learning need not happen in a classroom. It can happen anywhere, anytime. Take half an hour each day to read a chapter from a textbook, listen to a technology podcast, read development blogs or learn a new programming language.
```



```
#### It's powerful for leaders to admit when they don't know something.

Having this confidence lowers the expectation that Senior Engineers have to know everything. You absolutely don’t need to have all the answers, but being able to admit you’re human and are committed to figuring out how to solve problems with your team is the important part.

#### Leaders also admit when they make mistakes.

It’s important to teach your team how to handle mistakes with humility and the desire to learn and improve. The real world isn’t perfect and it’s totally okay to show your team it isn’t perfect to prepare them for it.
```


```
### Generic vs Specific code

#### Write code specifically for the problem at hand, but try to spot places where you can afford to make it a little generic.

Often, we attempt to code things as generic as possible, and end up making what is effectively code soup that doesn’t help accomplish the problem. Instead, building specifically for this problem, but trying to spot places it can be made just a little bit more generic, has altogether eliminated times I know I would’ve had to refactor again later if I hadn’t been thinking of it.

There are several principles commonly discussed that talk about design complexity. From the extreme programming world, you have:

- [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) or You aren’t gonna need it, which states that programmers should not add functionality until it is necessary.
- [Do the simplest thing that could possibly work -](https://ronjeffries.com/xprog/articles/practices/pracsimplest/) to make rapid progress rather than plan for the future.

Both these principles aim to prevent [over-engineering](https://en.wikipedia.org/wiki/Overengineering). However, these principles could be abused to create multiple simple solutions which do not integrate well.

At the other end of the spectrum, you have the [Abstraction](https://en.wikipedia.org/wiki/Abstraction_principle_\(computer_programming\)) principle that aims to reduce duplicate structures in the code whenever practical through abstraction and generalization. I prefer to take the middle ground between extreme abstraction and extreme simplicity by making code just a little generic. The [AHA](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself#AHA) (Avoid hasty abstractions) principle promotes a similar idea.
```



```
### Deep modules

#### Write code that solves complex problems for other developers but exposes functionality through a lucid interface.

If you are an API designer or developer - your responsibility is to provide an interface to simplify complex functionality for other developers. The purpose is defeated if the interface is too difficult to understand and imposes a cost on the programmer using it. This idea is reflected in the concept of [Deep Modules](https://medium.com/@nathan.fooo/4-notes-modules-should-be-deep-ba5671c4288c#:~:text=greatest%20benefit%20and%20the%20least%20cost) - “The best modules are those with the greatest benefit and the least cost. The benefit provided by a module is its functionality, and the cost of a module is its interface.”

While the simplicity of an interface is desirable, complex problems sometimes require complex code to solve them (this if not a universal rule, but is often true). This complexity is better off embedded in code. When complex functionality is abstracted, the value provided to the end-user or interface user is higher.

An API with multiple visible functions and classes encompassing some functionality is more complex and challenging to search when compared to another with the same functionality implemented using fewer public functions/classes. New functions and classes add to the cost of the interface for maintenance programmers and library users.
```


```
Definition of done
Defining what is "done" is time-saving because it helps you estimate the effort required, plan for development, and avoid unnecessary revisions later.

Another Agile principle that comes in handy when dealing with complexity is agreeing on the definition of done. In addition to meeting user requirements and acceptance criteria, this could include other conditions such as code reviews, testing, documentation, etc.
```



```
### Documentation process

#### Coordinate reviews for the design doc and compare the design as it evolves with the original doc to verify that all the relevant constraints are being addressed.

While one person can document the design, the actual design process occurs during a series of whiteboard meetings, random in-person discussions, slack threads, or email/phone discussions. Only after you put it down on paper can you identify contradictory commitments and see if the different parts you had discussed fit together. After creating the initial draft, coordinating a review ensures that all parties concerned are on board. However, it may happen that the implemented design does not match what is documented because something changed along the way.
```


```
## Communication

#### Be humble, communicate clearly, and respect others. It costs nothing to be kind, but the impact is priceless. Some may say good communication costs energy and thoughtfulness. There should be more energy for compassion.

Communication is a critical part of the soft skills or people skills required to become an effective, productive, and efficient software engineer. Miscommunication can lead to incorrect functionality, incompatible code, or offensive team dynamic. Communication can help people understand requirements better and prevent issues from being escalated.

The world may imagine software engineers to be people who spend their day writing code. However, to ensure that our products are helpful to others, we have to synchronize our efforts with others in the team and business and user expectations. This makes collaboration and communication the critical pillars of our jobs.

Junior developers mostly communicate with other team members, test engineers, and team leaders to share ideas and discuss alternatives for problem-solving. As we grow in our careers, the quantity of communication required to do our jobs effectively goes up. The number of emails, meetings, and public talks increases. We have to communicate with business leaders, managers, stakeholders, and team members. The more specialized your work, the greater the risk that others will not easily comprehend you.
```


```
### Customized communication

#### Use language, concepts, and levels of detail relevant to your audience.

Whatever our level of understanding of a problem or a situation, when we discuss it with others, we have to tailor our words so that they can quickly grasp what is relevant to them:

- When talking to a business person, talk about the business impact of what you are doing. Avoid using overly technical jargon.
- When talking to engineering management, communicate the technical impact or challenges.
- When talking with a decision-maker, you describe available options and their implications and risks, not the details of how the options work.
- When providing a status update, be aware of what else has transpired and how your update is relevant to the project goals.

The same principle applies when writing emails and presenting to a larger audience. Write what is relevant to the person or people receiving the message. You may have to defend your ideas when presenting. Phrase questions and responses in a thoughtful manner. Knee jerk responses are usually detrimental to communication.
```

```
The power of NO
Saying no is better than overcommitting.

Most of us are not great at saying “no” where more work is concerned. It is either because they don’t realize that ‘no’ is an option, or we enjoy the challenge. However, overcommitting is a liability as it can lead to delays. Letting the other person know what is already on your plate and providing a reasonable estimate of how long it would take is a sign of respect. It gives the other person a chance to consider their options - ask someone else or extend their timeline. Management will not ask you to deliver something in record time if they know that it will significantly impact the quality of the product. If you are a senior manager, empower your team to say no to bad ideas.

"“A senior developer (or any productive person) is good at saying no. People will ask for more of your time than you can spare. You can gently but firmly say no, direct people elsewhere (delegate), or ask people to discuss with your manager whether more of your time can be allocated to help them.” [1]"
You can't please everyone - be extremely mindful when saying "yes" vs. "no".

The counterpart to leaders saying “no” to everything is saying “yes” to everything and failing to set clear boundaries. Taking on more scope than can actually be executed reasonably well with your current resources can lead to heartache for you, your team and eventually your customers. This is particularly important for leaders to absorb as others will look to you to set the norms on when they should say “yes” or gently push back.
```


```
### Flexibility

#### Defend your opinions stridently but also review them every time you have new evidence that contradicts them.

Listening to other opinions is a key part of communication. It’s essential because there may be more than one solution to a problem. Rather than being adamant about your views, listen and evaluate other options. Maybe they will bring forward an aspect that you had earlier overlooked. [Paul Saffo’s principle](https://www.saffo.com/02008/07/26/strong-opinions-weakly-held/) of “_Strong opinions weakly held_” tells us to defend our opinions stridently but also review them every time we have new evidence that contradicts them. It is a scientific evidence-based method that does not consider the person who came up with an idea or opinion.
```


```
### Seniority and strategic thinking

#### Don't fail to make decisions or act given uncertainty.

Very often you will find that it’s better to make any decision rather than no decision at all. It at least allows others to know what direction you’re leaning towards. Sometimes as leaders we don’t spend enough time reflecting on what decisions our teams are expecting us to make, but are not, because we’re not 100% certain we have all the facts. We can and should try to build as complete a picture of the details needed to make confident decisions as we can, but this isn’t always possible (e.g. in a time crunch). This can lead to long periods of waiting/uncertainty for teams where it can help to actively better yourself on how to make decisions even given limited information.

#### Leaders are people who have broadened their horizons to think strategically and lay out the roadmap for others.

Your ability to think and plan strategically and apply your thinking to larger scopes should ideally grow with experience. As an individual contributor, you may focus on assigned tasks or the features you are working on. The impact of your work extends beyond specific tasks and projects as you climb the ladder. When weighing options, you learn to look at the larger picture in terms of benefits and constraints. The scope of application of soft skills also increases. For example, if earlier you were making decisions for a team or addressing other engineers in your team, your choices and communication impact multiple teams as you grow.
```


```
### Understanding the business model

#### Understand the business impact of the change.

When you receive a new set of requirements, understand the motivation behind them. Don’t skim over the ‘purpose’ or ‘business goals’ section of the requirement documents. Ask questions to understand the business model and its relation to these requirements. An existing codebase or talking to subject-matter-experts (SMEs) can provide insights about the domain and the architecture. Refer to the documentation or map features and use cases to system processes and data flows.

“A lot of software engineers love to solve problems with a technical challenge. It can be more rewarding to understand the business side of things and be able to come up with cost effective solutions. Remember that your users/customers are also people trying to do their job, and get through the day or week, just like you are. Try not to make their lives harder than they already are.” [[1]](https://news.ycombinator.com/item?id=26177680)


### Increase your impact

#### Perceptiveness and astuteness about the business-software equation increases the impact of your work.

Getting a 360-degree view of the business and the product helps you contribute positively to the team and your projects. If you understand how sales or marketing think, you are better equipped to make the right decisions and do high-impact work. As your impact on a team’s success increases, your job satisfaction and pay will improve. Your seniors will recognize your ability as a self-starter who can work independently without supervision and drive overall efficiency by doing what is suitable for the team, project, and business.
```


```
**Update estimates as your understanding of problems improves**

There will almost always be a customer or stakeholder for your work that will want to know when a project or task can be delivered and if this cost is worthwhile. This is totally reasonable. Sometimes they want to match a deadline or there are dependencies elsewhere that need to support your engineering work requiring planning.

Software deadlines are notoriously difficult to predict accurately. Deadlines that are based on estimates should only be given when projects are at a particular stage. When time passes, estimates should get updated as we learn more about the team's ability to solve the problem (the "informed" estimate). The first estimate (the "sizing") is often the least reliable, however it is a starting point that can get refined over time. This initial estimate is often very conservative - should the product requirements, UX or dependencies be unclear, a larger conservative estimate is often helpful for that first "size". I often have the best success here when such estimates are approached collaboratively with PMs so we are all on the same page about refining them.

The trouble with software estimates is when the first rough estimate gets cemented as the plan of record rather than a first draft. When teams on the critical path adopt it but view adjustments to the estimates as a hiccup by engineering (vs. step 1/n of an informed estimate) this can be an issue. Once a project has the greenlight, figure out the details better - this may mean an estimate of three months becomes two (or four) based on a deeper understanding of what will address the requirements.

You almost always want the estimates driving your schedule vs. having the schedule drive the estimates where possible. In my teams, while we do sometimes have unmovable deadlines (e.g. a conference), if the estimates overshoot these dates that's (often) fine - changing messaging (e.g. "preview"), framing ("coming in the near future") or punting to a future are always options we can discuss with leadership. I of course acknowledge this is not always trivial. When schedules do try to be pulled in, you can break work up into must-have vs. nice-to-have (and move these to a future sprint) then review if the must-haves meet your deadline.

Should schedules still be too tight, there are other questions you can ask, such as "Can we add additional engineers to this project?" and "is there a large reduction of scope that would still make shipping on time compelling?".
```