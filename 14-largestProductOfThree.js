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
  // TODO: everything

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

  var x = ["-", "-", "3", "12", "422", "1"].map(Number).filter((ele) => {
    return ele > 0;
  });
  //[3,12,422,1];
  function sortfunc(a, b) {
    if (a > b) {
      return 1;
    } else if (a === b) {
      return 0;
    } else {
      return -1;
    }
  }
  x.sort(sortfunc);
  let ret = x[0] * x[1] * x[2];
};
