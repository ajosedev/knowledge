# Choose boring technology

Simply put, boring technologies have well understood capabilities and failures. They have less unknown unknowns.

Note that 'boring' does not equal 'bad'. Technology can be both, but we're aiming for tried and tested technology that have stood the test of time. Think PHP, MySQL, Memcached, Cron, etc.

When choosing technology, you have both [[20220509122858-known-unknowns|known unknowns and unknown unknowns]].
- A known unknown is something like: "we don’t know what happens when this database hits 100% CPU.""
- An unknown unknown is something like: "it didn’t even occur to us that writing stats would cause GC pauses."

To aid with choosing boring technology and avoid unnecessarily bringing in new technology, the following can help:
- Consider how to solve your problem without adding anything new
- Document how not introducing anything new makes solving the problem expensive and difficult
- Consider the overlap between new technology capabilities and current technology. Set clear expectations about migration strategies.

Remember that new technology additions often have company-wide effects. In turn, adding new technology should required company-wide visibility.

https://mcfunley.com/choose-boring-technology

[[architecture]]
[[concepts]]
[[principles]]