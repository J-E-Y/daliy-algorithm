/*
Level : 1 
Question : https://programmers.co.kr/learn/courses/30/lessons/12918
Source : programmers.co.kr
*/

function solution(s) {
  var result;
  // result = (s.length === 4 || s.length === 6) && !isNaN(s) : true : false;
  if ((s.length === 4 || s.length === 6) && !isNaN(s)) {
    result = true;
  } else result = false;
  return result;
}
