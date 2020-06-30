/*
Level : 1 
Question : https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript
*/

function solution(s) {
  let strArr = s.toUpperCase().split('');
  if (!strArr.includes('P') && !strArr.includes('Y')) {
    return true;
  }
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'P') {
      count1++;
    } else if (strArr[i] === 'Y') {
      count2++;
    }
  }
  if (count1 === count2) {
    return true;
  } else {
    return false;
  }
}
