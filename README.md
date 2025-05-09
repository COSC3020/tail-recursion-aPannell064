# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

I assume that the non-tail-recursive version we are refering to is the one 
seen here: 

```javascript
function fib(n) {
  if (n <= 2) return 1;
  else return fib(n-1) + fib(n-2);
}
```
This implementation calls itself twice on each iteration and does this 
on both sides roughly n times. This means that it has an exponential time 
complexity at $\Theta(2^n)$. However, in order to make a tail-recursive 
implementation, you can't perform any actions after the recursive call 
other than just returning the result. That is why my implementation just 
makes one recursive call each time. Since n is decreasing by one each time, 
the complexity of my tail-recursive implementation is $\Theta(n)$, which is 
much faster than the standard implementation. 

## Extra Help

I based my code off the iterative approach in the slides. 

"I certify that I have listed all sources used to complete this exercise, 
including the use of any Large Language Models. All of the work is my own, 
except where stated otherwise. I am aware that plagiarism carries severe 
penalties and that if plagiarism is suspected, charges may be filed against 
me without prior notice."
