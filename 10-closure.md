

A **closure** is a mechanism present in some programming language that allows functions to **remember** the variables that were present in their **outer scope** when they were defined.
<br>

#### Sample 1
```js
const makeGreeter = () => {
  const closureGreeting = 'Hello'

  return user => {
    const message = `${closureGreeting}, ${user.firstName}`
    return message
  }
}

userGreetingMessage = makeGreeter()
userGreetingMessage({firstName: 'Saeed'})
```
<br>

#### Sample 2
```js
const counter = initialValue => {
  let currentValue = initialValue
  return () => {
    console.log(`The current value is: ${currentValue++}`)
  }
}

const countFromFive = counter(5)
countFromFive() // The current value is: 5
countFromFive() // The current value is: 6
countFromFive() // The current value is: 7
```
<br>

#### Sample 3
```js
function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5)); // 10
```
