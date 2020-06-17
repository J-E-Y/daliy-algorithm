/*
 * Given an array of numbers, calculate the greatest contiguous(not be off) sum of elements in array.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // sum of [1,2,3] === 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // sum of [3,-4, 5] === 7
 * example 4: sumArray([4, -1, 5]); // => 8 sum of [4, -1, 5] === 8
 * example 5: sumArray([10, -11, 11]); // [11] A siggle array item
 */

// Solved in O(n) time with O(1) memory
//! 배열 내에서 연속된 숫자의 값이 가장 큰 경우를 리턴.
var sumArray = function (array) {
  const minusArr = array.filter((num) => {
    return num < 0;
  });
  if (array.length === minusArr.length) {
    return Math.max(...array);
  }
  let sum = 0;
  let retSum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    if (sum < 0) {
      sum = 0;
    } else if (retSum < sum) {
      retSum = sum;
    }
  }
  return retSum;
};
