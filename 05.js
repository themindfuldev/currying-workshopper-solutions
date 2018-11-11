/*
 CALL AND APPLY
 Exercise 5 of 6


## Good going!!

Simple currying is good. However delaying invocation for only the second call is
not extremely advantageous. Also, if all the arguments are already provided,
then delaying invocation for second or subsequent calls will be unnecessary
overhead. We want to call our function as:

    sum(3,4); // 7
    sum(3)(4); // 7

To dive deep into this we first need to understand the following functions:

  * call
  * apply

For this we have to create two methods, caller (for call) and applier (for
apply).

## Task

Write a function which will accept a method, an object, and additional
parameters. Then invoke the method on the object, passing the parameters.

Suppose we have a method:

    var update = function(name, age, tShirtSize) {
      this.name = name;
      this.age = age;
      this.tShirtSize = tShirtSize;
    };

and a person object:

    var person = { name: 'Kishor', age: 28, tShirtSize: 'L' };

You need to provide the implementation for the method:

    var caller = function (person,
                           update,
                           name,         //'Sharma'
                           age,          // 29
                           tShirtSize) { // 'XL'
      // your code here
    };

    console.log(person) // => person.name = Sharma, person.age = 29 and person.tShirtSize = XL

-------------------------------------------------------------------------------

## HINTS

The call() method is inherited from Function.prototype. It calls a function with
a given 'this' value and arguments provided individually. The apply() method is
similar to call(), except the arguments are provided as an array.

*/

var callAndApply = {
    caller: function (object, method, nameArg, ageArg, tShirtSizeArg) {
        return method.bind(object)(nameArg, ageArg, tShirtSizeArg);
    },
    applier: function (object, method, argumentsArr) {
        return method.bind(object)(...argumentsArr);
    }
};
module.exports = callAndApply;