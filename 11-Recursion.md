
#### Factor
```js
const factor = function(input) {
  let result = 1;
  
  for (let counter=input; counter>1; count--) {
    result *= count;
  }

  return result;
};

factor(6); // 720
```


#### Factor - Recursive
```js
const factor = function(input) {
  if (input <= 0) {
    return 1;

  } else {

    return (input * factor(input - 1));
  }
};

factor(6); // 720
```


#### Using native reduce method
```js
const Hotels = {
  tehran: [{ name: 'tehran-hotel-1', rooms: 56 }, { name: 'tehran-hotel-2', rooms: 45 }],

  london: {
    central: [{ name: 'london-hotel-1', rooms: 100}, { name: 'london-hotel-2', rooms: 120 }],
    vicinity: [{ name: 'london-hotel-3', rooms: 70}]
  }
};


function sumSalaries(city) {
  if (Array.isArray(city)) {
    return city.reduce((prev, current) => prev + current.rooms, 0);

  } else {

    let sum = 0;

    for (let subCity of Object.values(city)) {
      sum += sumSalaries(subCity);
    }

    return sum;
  }
}

sumSalaries(Hotels); // 391
```


#### Fibonacci
```js
function fibonacci(num) {
  if (num <= 0) {
    return 0;
  }
  
  if (num === 1) {
    return 1;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

function memoizedFibonacci(num, memo) {
  if (num <= 0) {
    return 0;
  }
  
  if (num === 1) {
    return 1;
  }

  if (!memo[num]) {
    memo[num] = memoizedFibonacci(num - 1, memo) + memoizedFibonacci(num - 2, memo);
  }

  return memo[num];
}


fibonacci(45); // Order 2 pow n
memoizedFibonacci(45, {}); // order n

```
