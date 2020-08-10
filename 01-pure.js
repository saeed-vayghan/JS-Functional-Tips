A **Pure** function is a function that always returns the same output with a given input.
- Easier to **define**, **read**, **test**, and **underestand**
- More **performant** and **informative**

Tips:
1. Pure functions dont have **side effects**.
1. Pure functions can be **cached** by input, (using memoization or other thirdparty tools like Redis).
1. Pure functions make testing easier. You don't have to **mock** the whole worls.


#### Sample 1
```js
// Impure
const input = 'world'
cont myFunction = () => {
  console.log('Helloe', input)
}
myFunction()


// Pure
const input = 'world'
cont myFunction = (input) => {
  console.log('Helloe', input)
}
myFunction(input)
```

#### Sample 2
```js
const arr = [1, 2, 3, 4, 5];

// impure
arr.splice(0, 3); // [1, 2, 3]
arr.splice(0, 3); // [4, 5]
arr.splice(0, 3); // []

// pure
arr.slice(0, 3); // [1, 2, 3]
arr.slice(0, 3); // [1, 2, 3]
arr.slice(0, 3); // [1, 2, 3]
```

#### Sample 3
```js
// impure
const minimum = 21;
const checkMyAge = (age) => age >= minimum;

// pure
const checkMyAge = (age) => {
  const minimum = 21;
  return age >= minimum;
};
```


#### Sample 4
```js
// Caching with memoization technique.
const memoize = (func) => {
  const cache = {};

  return (...args) => {
    const key  = JSON.stringify(args);
    cache[key] = cache[key] || func(...args);
    return cache[key];
  };
};

const squareNumber = memoize(input => input * input);
squareNumber(4); // 16
squareNumber(4); // 16, returns from cahce
```
