/*
 CURRY FUNCTION
 Exercise 6 of 6


## Recap

Great, if you've made it this far you have learned following:

  * Closures, their advantages and how to use them.
  * Function call and apply.
  * How to make a basic curry function that adds.

What's next?

## Task

Now, using this knowledge, we will create a function that will take another
function as argument (any function that we want to be curried) and convert it
into a curried function.

For example, suppose we have a function:

    function abc(a,b,c) {
        return a+b+c;
    }

You need to write a function that curries that function, so it can be used as
follows:

    var curriedAbc = curryFunc(abc);
    curriedAbc(a)(b)(c); // Now we can call original function like this...
    curriedAbc(a,b)(c); //or this
    curriedAbc(a)(b,c); //or this
    curriedAbc(a,b,c); //or this

*/

const curried = (fn, arity, ...args) => {
    const n = args.length;

    if (n === arity) {
        return fn.apply(undefined, args);
    }
    else {
        return (...newArgs) => curried(fn.bind(undefined, ...args), arity-n, ...newArgs);
    }
} 

const curryFunc = fn => curried.bind(undefined, fn, fn.length);

module.exports = curryFunc;