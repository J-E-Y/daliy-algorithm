/*
Level : 1 
Question :https://programmers.co.kr/learn/courses/30/lessons/12937
*/

function solution(num) {
  if (num % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

function evenOrOdd(num) {
  return num % 2 ? 'Odd' : 'Even';
}
