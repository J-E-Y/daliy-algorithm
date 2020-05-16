/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */
// 0 1 1 2 3 5 8 13 21 34 ......
// 점화식표현은 ==> f(n) = f(n-1) + f(n-2)

// // termination
// if (n === 0) {
//   return 0;
// }
// // BASE
// if (n === 1) {
//   return 1;
// }
// // recursion
// return nthFibonacci(n - 2) + nthFibonacci(n - 1);
var nthFibonacci = function (n) {
    if (n < 2) {
      return n;
    }
  
    let a = 0,
      b = 1,
      temp;
  
    while (n - 1 > 0) {
      temp = b;
      b = a + b;
      a = temp;
      n--;
    }
    return b;
  };