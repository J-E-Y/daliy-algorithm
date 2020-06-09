/*
Level : 1 
Question : https://programmers.co.kr/learn/courses/30/lessons/42862?language=kotlin
Source : programmers.co.kr
*/

function solution(n, lost, reserve) {
  // 전체 인원에서 도난당한 사람을 빼준다.
  // haveStudents 체육복을 가진 사람의 숫자이다.
  var haveStudents = n - lost.length;

  // 잃어버린 사람 앞이나 뒤에 여벌의 체육복을 가진 사람이 있다면,
  // 체육복을 빌리고, haveStudents 카운트한다.
  for (let num of lost) {
    let frontCheck = reserve.indexOf(num - 1);
    let behindCheck = reserve.indexOf(num + 1);

    // 잃어버린 학생이 3, 5 / 여벌가진 학생이 4 였을때
    // 4번 학생이 3번에게 빌려주고
    // 또 다시 5번에게 빌려주는 경우를 제거하기 위해서
    // 빌려준 학생은 배열에서 제외시킨다.
    if (frontCheck !== -1) {
      reserve.splice(frontCheck, 1);
      haveStudents++;
    } else if (behindCheck !== -1) {
      reserve.splice(behindCheck, 1);
      haveStudents++;
    }
  }
  return haveStudents;
}
