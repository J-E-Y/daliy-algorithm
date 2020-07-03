/*
Level : 1 
Question :https://programmers.co.kr/learn/courses/30/lessons/12925
*/

function solution(s) {
  let wordArr;
  if (s[0] === '-') {
    wordArr = s.split('');
    wordArr.shift();
    wordArr.unshift('-');

    return parseInt(wordArr.join(''));
  } else {
    return parseInt(s);
  }
}
