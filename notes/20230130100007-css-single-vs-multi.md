# Single-class vs multi-class CSS

Single-class:
```css
.btn, .btn-primary { /* button template styles */ }
.btn-primary { /* styles specific to primary button */ }
```
```html
<button class="btn">Default</button>
<button class="btn-primary">Login</button>
```

Multi-class:
```css
.btn { /* button template styles */ }
.btn-primary { /* styles specific to primary button */ }
```
```html
<button class="btn">Default</button>
<button class="btn btn-primary">Login</button>
```

Multi-class usually scales a little better. `btn` contains the base, and `btn-primary` only exists to build on top of it. It becomes more evident as you have more 'levers', e.g. button colours and button sizes.
With the multi-class pattern, this would lead to fewer classes, as you can mix the two properties together (`.btn .btn-primary .btn-large`).
With the single-class pattern, you'd need to create classes for every possible combination (`.btn-primary-large`).

https://nicolasgallagher.com/about-html-semantics-front-end-architecture/

[[api]]
[[css]]