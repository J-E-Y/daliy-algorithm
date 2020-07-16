/*
Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.

 

Example 1:

Input: A = "ab", B = "ba"
Output: true
Example 2:

Input: A = "ab", B = "ab"
Output: false
Example 3:

Input: A = "aa", B = "aa"
Output: true
Example 4:

Input: A = "aaaaaaabc", B = "aaaaaaacb"
Output: true
Example 5:

Input: A = "", B = "aa"
Output: false
 

Constraints:

0 <= A.length <= 20000
0 <= B.length <= 20000
A and B consist only of lowercase letters
*/
var buddyStrings = function (A, B) {
  if (A.length <= 1 || B.length <= 1 || A.length !== B.length) {
    return false;
  }
  if (A === B) {
    let C = [...new Set(A.split(''))];
    return C.length !== A.length;
  }
  A = A.split('');
  B = B.split('');
  let arr = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      arr.push(A[i]);
      arr.push(B[i]);
    }
  }
  return arr.length === 4 && arr[0] === arr[3] && arr[1] === arr[2];
};
