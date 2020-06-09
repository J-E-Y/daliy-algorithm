/*
Level : 1 
Question : https://programmers.co.kr/learn/courses/30/lessons/12912
Source : programmers.co.kr
*/

function solution(a, b) {
  let sum = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum = sum + i;
    }
  } else if (a > b) {
    for (let i = b; i <= a; i++) {
      sum = sum + i;
    }
  } else {
    sum = a;
  }
  return sum;
}
