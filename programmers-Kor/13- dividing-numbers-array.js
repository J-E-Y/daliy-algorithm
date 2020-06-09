/*
Level : 1 
Question : https://programmers.co.kr/learn/courses/30/lessons/12910?language=javascript
Source : programmers.co.kr
*/

function solution(arr, divisor) {
  var answer = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) answer.push(arr[i]);
  }
  answer.sort(function (a, b) {
    return a - b;
  });
  if (answer.length === 0) answer.push(-1);
  return answer;
}
// solution([2, 36, 1, 3], 1)
