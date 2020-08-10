
The concept is simple:
- **You can call a function with fewer arguments than it expects**.
- **It returns a function that takes the remaining arguments.**
<br>

#### Sample
```js
const add = x => y => x + y;
const increment = add(1);
const addTen = add(10);

increment(2); // 3
addTen(2); // 12
```
