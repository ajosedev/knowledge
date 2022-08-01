# Libraries vs Frameworks

> Inversion of Control is a key part of what makes a framework different to a library. A library is essentially a set of functions that you can call, these days usually organized into classes. Each call does some work and returns control to the client.
> 
> A framework embodies some abstract design, with more behavior built in. In order to use it you need to insert your behavior into various places in the framework either by subclassing or by plugging in your own classes. The framework's code then calls your code at these points.

https://martinfowler.com/bliki/InversionOfControl.html

>Libraries and a frameworks can be distinguished by looking at the _Inversion of Control_. When I use a library, I slot the library into my code and call into the library in the appropriate places. A framework, on the other hand, makes itself the center of the universe and offers slots _for me to slot into_. It’s the Hollywood principle: You don’t call the framework, the framework calls you.
>
>This inversion of control is not inherently bad. After all, the framework was designed to be in this place and probably provides some pretty sophisticated machinery to make code easier to write, run more efficiently or utilizes other peripheral better.

[[20210705094040-inversion-of-control]]
[[20220801015917-hollywood-principle]]

[[concepts]]