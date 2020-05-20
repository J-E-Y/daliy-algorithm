/*
Level : 1 
Question : https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript
Source : programmers.co.kr
*/

function solution(s) {
  let result = "";

  if (s.length % 2 === 0) {
    result += s[s.length / 2 - 1];
    result += s[s.length / 2];
  } else {
    result += s[parseInt(s.length / 2)];
  }
}
