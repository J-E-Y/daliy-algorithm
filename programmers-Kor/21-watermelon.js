/*
Level : 1 
Question : https://programmers.co.kr/learn/courses/30/lessons/12922?language=javascript
*/

function solution(n) {
  let result = '';
  if (n < 10000) {
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        result += '수';
      } else {
        result += '박';
      }
    }
  }
  return result;
}
