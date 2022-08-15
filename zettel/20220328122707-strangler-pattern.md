# Strangler pattern

The strangler pattern puts an older system (e.g. a monolith) behind an intermidiary abstraction, such as a new API gateway. Over time parts of the system are replaced by newer systems, behind this gateway. Since the changes happen behind this abstraction, changes aren't 'seen' on the outside, reducing their impact. Eventually the old system is entirely replaced by these newer systems.

The major advantage to this strategy is risk minimisation. The newer services can be deployed and monitored incrementally. There's no 'stop the world' event where code an entirely rewritten system replaces the old one and you hope for the best.

In addition, the upfront time investment is smaller. Newer services can come online iteratively, allowing for constant value adds.

There's a risk of introducing [[20220328112501-lava-layers|lava layers]] if the strangle stops at various stages.

---
The most important reason to consider a strangler fig application over a cut-over rewrite is reduced risk. A strangler fig can give value steadily and the frequent releases allow you to monitor its progress more carefully. Many people still don't consider a strangler fig since they think it will cost more - I'm not convinced about that. Since you can use shorter release cycles with a strangler fig you can avoid a lot of the unnecessary features that cut over rewrites often generate.

There's another important idea here - when designing a new application you should design it in such a way as to make it easier for it to be strangled in the future. Let's face it, all we are doing is writing tomorrow's legacy software today. By making it easy to add a strangler fig in the future, you are enabling the graceful fading away of today's work.

One of the ongoing challenges in architecture design and implementation is transformation risk. Any change to an existing system can result in unanticipated hazards. The Strangler pattern provides increment transformation to a system and reduces larger systemic risk to smaller, discrete episodes of change. Taking small risks to achieve a goal is always better than taking a large one. Small failures are easier to remedy than large ones, hence the essential benefit of the Strangler pattern.

[[architecture]]
[[concepts]]
[[microservices]]
[[migrations]]
[[monoliths]]
[[product]]
[[refactoring]]