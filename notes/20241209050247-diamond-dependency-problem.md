# Diamond dependency problem

>When a library A depends on libraries B and C, both B and C depend on library D, but B requires version D.1 and C requires version D.2. The build fails because only one version of D can exist in the final executable.

This is a really fundamental problem, with different solutions, different package managers, and different languages all handling it differently. Some examples of mitigations are:
- Ensure that Package D always has backwards compatibility. In this example, B could be updated to use D.2, and no other change would need to be made.
- Ensure robust testing exists for B and C, so that they can be tested against D.
- Co-ordinate package updates so required dependencies update in some form of sync
- Create a new version of B or C, so that they can rely on the same version of D.

Diamond dependency problems need to be solved at the ecosystem level, rather than a local level. This is due to the solution requiring co-ordination between >1 library.

[[dependencies]]