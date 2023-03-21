# Using double writes in migrations

Double writes (or dual writes) are a common theme in large [[migrations]]. It involves writing data to two locations, the old datastore and the new datastore. This allows you to validate the data on the new datastore before making it the 'live' store.

It's common for the double writes to first be done asyncronously to not degrade user performance. Later in the migration, it can be moved to a synchrnous write, before finally writing only to the new datastore.

While commonly associated with data migrations, a similar approach can be used for architecture migrations. Traffic can be duplicated to new and old servers, returning a result only from the existing, working services. This is similar to a [[20221117105511-canary-release]] approach.

https://newsletter.pragmaticengineer.com/p/real-world-engineering-challenges
https://newsletter.pragmaticengineer.com/p/real-world-eng-8