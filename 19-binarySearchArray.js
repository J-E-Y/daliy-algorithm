/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function (array, target) {
  if (!array.includes(target)) {
    return null;
  }
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      index = array.indexOf(array[i]);
    }
  }
  return index;
};
