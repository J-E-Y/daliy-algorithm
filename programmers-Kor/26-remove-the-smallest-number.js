/*
Level : 1 
Question :https://programmers.co.kr/learn/courses/30/lessons/12935
*/

function solution(arr) {
  let answer = [];
  if (arr.length === 1 || arr.length === 0) {
    answer.push(-1);
  } else {
    answer = Math.min(...arr);
    arr.splice(arr.indexOf(answer), 1);
    return arr;
  }
  return answer;
}
