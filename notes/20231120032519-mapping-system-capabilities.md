# Mapping system capabilities

When it comes to [[ops]] and incidents, it can be good practice to map your system capabilities. Instead of referring to the microservice itself, group them via the capability that the offer to the user. Capabilities are often supersets of individual microservices.

This has many benefits:
- easier to explain what's wrong, and have a quick mapping from engineering jargon -> user impact
- a more accurate reflection of how users interact with your system
- usually more than one microservice is impacted during an incident
- microservices that report errors are often detached from microservices that are the root cause

In practice, capabilities give a shared language that works for everyone, not just engineers.

[[oncall]]