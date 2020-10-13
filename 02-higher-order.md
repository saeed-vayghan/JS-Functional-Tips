
**First-class** function is function that can be used as any other values
- Can be passed to other functions.
- Can be assigned to variables.
- Can be stored in complex data structures, like objects.
<br>

```js
function add (a, b) {
  return a + b
}

function multiply (a, b) {
  return a * b
}

// We are using add and multiply as like as other regular values
const math = {
  add,
  multiply
}

math.add(1, 2)
```
<br>



A **Higher-Order** function operate on other functions, which means it can do:
- Take a function as an input (argument)
- Return a function as an output (result)


```js
funxtion maker (input_1) {
  retun function (input_2) {
    return `${input_1} ${input_2}`
  }
}

const cooler = maker('cool')
warmer('weather')
```
<br>

#### Some of the native higher-order functions:

    map, reduce, filter, compose, forEach

```js
const allSubsets = (arr) => {
  return arr.reduce((subsets, value) => subsets.concat(
      subsets.map(set => [value,...set])
    ),
    [[]]
  );
}

console.log(allSubsets([1,2,3]));

/*
  [
    [],       [ 1 ],
    [ 2 ],    [ 2, 1 ],
    [ 3 ],    [ 3, 1 ],
    [ 3, 2 ], [ 3, 2, 1 ]
  ]
*/
```
