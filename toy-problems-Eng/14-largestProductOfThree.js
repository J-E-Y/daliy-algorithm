/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function (array) {
  //! 1.TODO: everything

  // [2, 5, 3, 7] = 105
  // 2 * 5 * 3 * 7  ====> 5 * 3 * 7

  // 새로운배열을 든다.
  // array 에 접근해서 가장 큰수을 앞으로 숫자들을 정렬한다.
  // 0 번째 1 번째 2 번 에 값들을 새로운 배열에 넣는다.
  // 넣을 값을 reduce 사용해서 곱한다.
  // 만약 값이 - 가 있다면
  // join("").split("")["-", "1", "-", "2", "3", "4", "5", "6"] 값으로 만든다.
  // for 문을 이용해 array[i] === "-";
  // splice(minusArr.indexOf(array[i+1],1))
  // "-", "-", "3", "4", "5", "6"
  //
  //! 1.TODO: everything
  const sorted = array.sort((a, b) => {
    return b - a;
  });
  // variable called "result" with value 1
  let result = 1;
  // if(sorted is not empty)
  // iterate over "sorted", multiply first three element with "result" accumulative
  for (let i = 0; i < 3; i++) {
    if (sorted[i] < 0) {
      // if(sorted[i] is a NEGATIVE number)
      result = result * Math.abs(sorted[i]);
    } else {
      // if(sorted[i] is a POSITIVE number)
      result = result * sorted[i];
    }
  }
  return result;
};
