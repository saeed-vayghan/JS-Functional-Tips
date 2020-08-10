
## DO NOT ITERATE

#### Use `map, filter, reduce` instead of `for, while`



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
