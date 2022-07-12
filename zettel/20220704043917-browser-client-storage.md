# Browser client storage solutions

**Cookies [[20220704043518-cookies]]**
The oldest method
- Only one that can send data to be read server-side
	- Thus, useful for storing session info
- Can expire
- Max 4kb

**LocalStorage & SessionStorage**
SessionStorage only lasts for a session, but is otherwise very similar to LocalStorage.
- Name/value pairs
- Simple get/set/delete/clear
- No expiration date
- Max 5-10MB

**IndexedDB**
The cutting edge of storage solutions
- Essentially a database
- Can store videos, images, and pretty much anything else
- More complicated API
	- Wrappers exist to ease the API
- No max limit

[[browsers]]
[[web]]