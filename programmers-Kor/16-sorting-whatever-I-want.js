/*
Level : 1 
Question : https://programmers.co.kr/learn/courses/30/lessons/12915?language=javascript
Source : programmers.co.kr
*/

function solution(strings, n) {
  var answer = [];
  var lenStr = strings.length;

  strings.sort();
  console.log("strings.sort():", strings.sort());
  var newStrings = strings.map((str) => str[n]);
  console.log("newStrings: ", newStrings);

  newStrings.sort();

  for (var i = 0; i < lenStr; i++) {
    for (var j = 0; j < lenStr; j++) {
      if (newStrings[i] === strings[j][n]) {
        answer[i] = strings[j];
        strings.splice(j, 1);
        break;
      }
    }
  }
  return answer;
}
