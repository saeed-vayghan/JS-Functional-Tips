
## DO NOT ITERATE

#### Use `map, filter, reduce` instead of `for, while`


#### Sample 1
```js
// imperative style
const getEmails = function(users) {
  const emails = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].role === 'admin') {
      emails.push(users[i].email);
    }
  }
  return emails;
}


// Functional
const getEmails = users => {
  return users.filter(u => u.role === 'admin').map(u => u.email);
}
```


#### Sample 2
```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]

const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]



// The reduce() method reduces an array of values down to just one value. 
// arr.reduce(callback[, initialValue])
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10


const pets = ['wolf', 'cat', 'dog', 'duck', 'cat', 'dog', 'duck', 'duck', 'cat', 'rabbit', 'cat'];
const initialValue = { 'custom-key': 'custom-val' };

const mapping = pets.reduce(function(obj, pet) {
  if (!obj[pet]) {
    obj[pet] = 1;

  } else {
    obj[pet]++;
  }

  return obj;
}, initialValue);

console.log(mapping); 
/*
Output:
{
  'custom-key': 'custom-val',
  wolf: 1,
  cat: 4,
  dog: 2,
  duck: 3,
  rabbit: 1
}

 */
```
