/*
Level : 1 
Question : https://programmers.co.kr/learn/courses/30/lessons/12901
Source : programmers.co.kr
*/

function solution(a, b) {
  let date = new Date(2016, a - 1, b);
  let day = date.toString().slice(0, 3).toUpperCase();
  return day;
}
