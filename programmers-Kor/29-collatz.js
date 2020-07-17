/*
Level : 1 
Question :
https://programmers.co.kr/learn/courses/30/lessons/12943


*/

function solution(num) {
  let count = 0;
  while (num > 1) {
    if (count >= 500) {
      return -1;
    } else {
      if (num % 2 == 0) {
        num = num / 2;
      } else {
        num = num * 3 + 1;
      }
      count++;
    }
  }
  return count;
}
