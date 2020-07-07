/*
Level : 1 
Question :https://programmers.co.kr/learn/courses/30/lessons/12931?language=javascript
*/

function solution(n) {
  var toStringArr = n.toString().split('');
  return toStringArr.map(Number).reduce((a, c) => a + c);
}
