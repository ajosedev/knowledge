# Microservices and where things live

In a monolith APIs, classes, objects, etc all live close to each other. The decision on 'where should this live?' for cross-module functionality is low stakes. Regardless of where it ends up, you can usually import it, move it around, or anything else. Just add another to the pile.

In a microservices world it's different. Since these microservices are independent, any cross-module functionality requires an API call. You have to handle errors, you have to house related code somewhere, etc. Because of this, you **have** to decide where it lives.

[[architecture]]
[[microservices]]