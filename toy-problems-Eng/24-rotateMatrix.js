/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 * Important note:
 *   In mathematics, and generally in CS, matrices are identified as m-by-n, where m is
 *   the number of *rows* and n is the number of *columns*. So an [i][j] address in a matrix
 *   will be i places down, and j places over. This usually matches the way arrays are
 *   addressed in code, but keep in mind that it differs from use in geometry and computer
 *   graphics, where coordinates of the form (x,y) are usually x units over, and y units down.
 *
 * Example rotation of a 4x4 matrix:
 *
 * var matrix = [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,'A','B','C'],
 *  ['D','E','F','G']
 * ];
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
 * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
 *  ['F','B',7,3],
 *  ['G','C',8,4]
 * ]
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
 * Extra credit:
 *  - Make your function operate on rectangular matrices (MxN rather than NxN).
 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */

// input = [
//!   [1,2,3,4,5,6],
//!   [7,8,9,'A','B','C'],
// ];
// output  = [
//!   [7,1],
//!   [8,2],
//!   [9,3],
//!   ['A',4],
//!   ['B',5],
//!   ['C',6]
// ]
var rotateMatrix = function (matrix) {
  // output 의 배열의 형태
  // 1. input 의 columns(행)의 length는  ouput rows(열)의 length 가 된다.
  // 2. 숫자는 1-9까지 순서대로들어온다.
  // 3. char 영문자도 A-Z 까지 순서대로 들어온다.

  // 알고리즘
  //!   [1,2,3,4,5,6],
  //!   [7,8,9,'A','B','C'],

  //!   [7,1],
  //!   [8,2],
  //!   [9,3],
  //!   ['A',4],
  //!   ['B',5],
  //!   ['C',6]

  // 함수륾 만들어 배열을 받으면 모든ele 를 하나의 배열안에 넣는다.
  // [1,2,3,4,5,6],
  var arrMaker = function (array) {
    let parentsArr = [];
    for (let i = 0; i < array.length; i++) {
      parentsArr.push([array[i]]);
      return parentsArr;
    }
  };
  // [Array(1), Array(1), Array(1), Array(1), Array(1), Array(1)]
  // [7,8,9,'A','B','C']
  var nestArrPush = function (nestArr, array) {
    let filledArr = [];
    nestArr.forEach((element) => {
      for (let i = 0; i < array.length; i++) {
        let eachArr = element.unshift(array[i]);
        filledArr.push(eachArr);
      }
    });
    return filledArr;
  };
};
