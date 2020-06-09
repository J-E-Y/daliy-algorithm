/*
Level : 1 
Question : https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript
Source : programmers.co.kr

*/

function solution(participant, completion) {
  // participant 배열이 길이가 completion 배열의 길이보다 1 크다.
  // 모두 소문자로 되어있다.
  // participant 안에는 중복된 이름이 있을수 있다.

  let result = "";
  // 만약 participant 배열안에 선수이름이 중복이 있고 그중복된 이름이 completion안에 요소에도
  // 있다면 그선수 이름을 incopleteArr 안에 넣는다.
  // 만약 그렇지 않다면
  // completion 안에 있는 선수이름 들이 partipant 안에 포함되어있지 않으면
  // 선수이름을 incompleteArr안에 넣는다.

  let duplicatePlayer = participant.filter((ele, index) => {
    return participant.indexOf(ele) !== index;
  });
  if (duplicatePlayer.length) {
    if (completion.includes(duplicatePlayer[0])) {
      result = duplicatePlayer[0];
    }
  } else {
    participant.forEach((player) => {
      if (!completion.includes(player)) {
        result = player;
      }
    });
  }
  return result;
}
