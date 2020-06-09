/*
Level : 1 
Question : https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript
Source : programmers.co.kr
*/

// 1번째 풀이

function solution(arr) {
  var answer = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
  }
  return answer;
}

// 2번째 풀이

function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
