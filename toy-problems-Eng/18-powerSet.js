/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

// should include all sub sets of length 1
// result.includes('j')
// result.includes('u')
// result.includes('m')
// result.includes('p)
// // should include 2
// result.includes(sortSet('ju')
// result.includes(sortSet('jm')
// result.includes(sortSet('jp')
// result.includes(sortSet('um')
// result.includes(sortSet('up')
// result.includes(sortSet('mp')
// // should include all sub sets of length 3
// result.includes(sortSet('jum')
// result.includes(sortSet('jup')
// result.includes(sortSet('jmp')
// result.includes(sortSet('ump')
// // should include the original se
// result.includes(sortSet('jump')

var powerSet = function (str) {
  // jump

  var arr = [];
  var str = "jump";
  str = str.split("");
  var count = 0;
  for (let i = 0; i < str.length; i++) {
    let oneSet = str[count] + str[i];
    arr.push(oneSet);
  }

  return arr.shift();
};
