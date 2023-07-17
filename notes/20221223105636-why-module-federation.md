# Why use Module Federation?

The main benefit I can see of Module Federation is it's ability to share code at **runtime**, while also intelligently sharing dependencies. In the past you would have to avoid bundling shared dependencies through things like Webpack `externals`. Module Federation handles that for you by declaring shared dependencies.

In Module Federation, each app is isolated. It's easy to point to an older version of the remote, which enables easier deployments, rollbacks, [[20221117105902-blue-green-deployments]], etc.

Broadly it helps solve the [[20230509014011-double-deploy]] problem.

Module Federation aids in taking ownership at the component level. Since it can be easily shared, a team could own a component. Make it as smart as possible and encapsulate everything it needs. Then the component could be mounted anywhere and just work. At the very least, ownership doesn't have to be an entire page [[20220801041930-splitting-microfrontends]].

You can also add federation layers. e.g. load a federated remote which then points to the correct federated remote from there. This can offer more flexibility with what remote you ultimately resolve to.

Note that Module Federation isn't the only solution that offers these benefits. [[20220628012715-import-maps]] are similar in some regards, and also help solve a lot of these problems. As far as I can see, Module Federation is better at the shared dependencies aspect though.

https://www.angulararchitects.io/aktuelles/import-maps-the-next-evolution-step-for-micro-frontends-article/

[[architecture]]
[[deployment]]
[[microfrontends]]
[[microservices]]
[[rendering]]
[[web]]
