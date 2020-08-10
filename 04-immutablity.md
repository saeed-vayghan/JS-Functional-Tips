#### Try to not change the state of your variables

```js
//Mutable
const arr = [1, 2, 3, 4, 5]
arr[2] = 'tampered'
arr = [1, 2, 'tampered', 4, 5] // mutable


// Immutable
const arr = [1, 2, 3, 4, 5]
const tamperedArr = arr.map(function(elm) {
  if ( elm === 2 ) {
    return 'tampered'
  }
  return elm
})

arr = [1, 2, 3, 4, 5]
tamperedArr = [1, 2, 'tampered', 4, 5]
```
<br>

#### A bit more complex
```js
const getUserBalance = user => {
  return user.balance
}
const rewardUser = user => {
  user.balance = user.balance * 2
  return user
}

//vs

const getUserBalance = user => {
  return user.balance
}
const rewardUser = user => {
  return {
    ...user,
    balance: user.balance * 2
  }
}
```
