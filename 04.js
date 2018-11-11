/*
 LONG_DELAY_INVOCATION
 Exercise 4 of 6


## It's a nice feeling

Wow!! You have just created a very basic curry function. Isn't it amazing how
simple it is? Let's make it a little more complex. Are you ready?

## Task

Write a function that takes one argument for each invocation. Each time it is
called, it should add its argument to a running total and return itself. If it is called with no
arguments, it should return the sum of all the arguments passed.

-------------------------------------------------------------------------------

## HINTS

So far so good!! You are doing great. Now it is time to explore some important
concepts essential for currying:

  * Lexical Scope
  * Closures

The solution to this puzzle is creating a closure. A closure is a special kind
of object that combines two things: a function, and the environment in which
that function was created. The environment consists of any local variables that
were in scope at the time that the closure was created.

*/

const curry = a => {
    if (a === undefined) {
        return 0;
    }
    return b => {
        if (b === undefined) {
            return a;
        }
        return curry(a + b);
    }
}

module.exports = curry;