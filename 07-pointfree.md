

**Pointfree style** means never **having to** say your data.
It means functions that never mention the data upon which they operate.

**Pointfree** programming is all about **modularizing** functions through **composition**. You use smaller, generic, well defined and well tested functions to build the functions you need.

We also don't have to worry about **temporary variables**, which makes it easier to understand code and harder to introduce bugs. Also, it's easier to understand and **test** smaller parts of the code, which makes it more reliable.

**Point free** style is the result of function **composition**, **currying** and **higher order** functions.
<br>


#### Sample 1
```js
// It's not pointfree because data: word is mentioned.
const snakeCase = word => word.toLowerCase().replace(/\s+/ig, '_');

// Pointfree
const compose = (f, g) => x => f(g(x));
const snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase);
```
<br>

#### Sample 2
```js
const div = (x, y) => x / y;
const ceil = Math.ceil;


// Manual composition
const pagination = {
  total: 101,
  itemsPerPage: 10,
  currentPage: 1
}
const calcPages = (totalItems, itemsPerPage) => ceil(div(totalItems, itemsPerPage));
calcPages(pagination.total, pagination.itemsPerPage);



// Programmatic composition
const compose = (f, g) => (x, y) => f(g(x, y));
const calcPages = compose(ceil, div);
const pagination = {
  total: 101,
  itemsPerPage: 10,
  currentPage: 1
}
calcPages(pagination.total, pagination.itemsPerPage);
```
<br>

#### Sample 3
```js
const users = [
  {firstName: 'Jane', lastName: 'Doe'},
  {firstName: 'John', lastName: 'Doe'}
]

const getUserDisplayName = user => `${user.firstName} ${user.lastName}`
users.map(user => getUserDisplayName(user)) // ["Jane Doe", "John Doe"]


// Make it point free
const getUserDisplayName = user => `${user.firstName} ${user.lastName}`
users.map(getUserDisplayName) // ["Jane Doe", "John Doe"]
```
<br>

#### Sample 4
```js
['1', '12', '123'].map(num => parseInt(num)) // [1, 12, 123]

// point free
['1', '12', '123'].map(Number) // [1, 12, 123]
['1', '12', '123'].map(parseInt) // [1, NaN, 1]
```
