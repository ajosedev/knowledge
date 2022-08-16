# Rewriting code from scratch

>We’re programmers. Programmers are, in their hearts, architects, and the first thing they want to do when they get to a site is to bulldoze the place flat and build something grand. We’re not excited by incremental renovation: tinkering, improving, planting flower beds.

>There’s a subtle reason that programmers always want to throw away the code and start over. The reason is that they think the old code is a mess. And here is the interesting observation: _they are probably wrong._ The reason that they think the old code is a mess is because of a cardinal, fundamental law of programming:

> It’s harder to read code than to write it.

>This is why code reuse is so hard. This is why everybody on your team has a different function they like to use for splitting strings into arrays of strings. They write their own function because it’s easier and more fun than figuring out how the old function works.

>The idea that new code is better than old is patently absurd. Old code has been _used_. It has been _tested_. _Lots_ of bugs have been found, and they’ve been _fixed_. There’s nothing wrong with it.

>It’s important to remember that when you start from scratch there is **absolutely no reason** to believe that you are going to do a better job than you did the first time. First of all, you probably don’t even have the same programming team that worked on version one, so you don’t actually have “more experience”. You’re just going to make most of the old mistakes again, and introduce some new problems that weren’t in the original version.

>If you are writing code experimentally, you may want to rip up the function you wrote last week when you think of a better algorithm. That’s fine. You may want to refactor a class to make it easier to use. That’s fine, too. But throwing away the whole program is a dangerous folly

Large scale refactors are often incremental too. They allow you to stop and ship at any given time. Re-writes often don't provide value until the end.

https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/

[[20220328112803-choose-boring-technology]]

[[architecture]]
[[concepts]]
[[refactoring]]
[[principles]]