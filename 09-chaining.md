### Chain your relevant functions


```js
function makeFriend() {
  var firstName = "";
  var lastName = "";
  var age = 0;

  return {
    setFirstName: function(fn) {
      firstName = fn;
      return this;
    },

    setLastName: function(ln) {
      lastName = ln;
      return this;
    },

    setAge: function(a) {
      age = a;
      return this;
    },

    toString: function() {
     return [firstName, lastName, age].join(' ');
    }
  }
};

makeFriend()
  .setFirstName("Mike")
  .setLastName("Fogus")
  .setAge(108)
  .toString();
  ```
