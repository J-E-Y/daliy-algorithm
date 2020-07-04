/*
Level : 1 
Question :https://programmers.co.kr/learn/courses/30/lessons/12930
*/

function solution(s) {
  var answer = '';
  let sArr = s.split('');
  let arrUp = [];
  let arrDown = [];
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    arrDown.push(String.fromCharCode(i));
  }
  for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
    arrUp.push(String.fromCharCode(i));
  }
  sArr.map((e, i) => {
    if (e === ' ') {
      answer += ' ';
    } else if (i === 0) {
      answer += e.toUpperCase();
    } else if (sArr[i - 1] === ' ') {
      answer += e.toUpperCase();
    } else if (arrDown.includes(answer[i - 1])) {
      answer += e.toUpperCase();
    } else if (arrUp.includes(answer[i - 1])) {
      answer += e.toLowerCase();
    }
  });

  return answer;
}
