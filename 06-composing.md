

**f** and **g** are functions and **x** is the value being **piped** through them.

#### Sample 1
```js
const compose = (f, g) => x => f(g(x));
const toUpperCase = x => x.toUpperCase();
const exclaim = x => `${x}!`;
const shout = compose(exclaim, toUpperCase);
const shout_alt = x => exclaim(toUpperCase(x));

shout('What a time to be alive'); // "WHAT A TIME TO BE ALIVE!"
shout_alt('What a time to be alive'); // "WHAT A TIME TO BE ALIVE!"
```
<br>


#### Sample 2
```js
// composability
const compose = (f, g) => x => f(g(x));
const addOne = x => (x + 1)
const multiplyByTwo = x => (x * 2)

// Traditional, No composition
const oldCalculator = x => (x + 1) * 2
console.log(oldCalculator(2))

// Composition
const newCalculator = compose(multiplyByTwo, addOne)
console.log(newCalculator(2))
```
