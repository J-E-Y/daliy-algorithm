/*
Level : 1 
Question : https://programmers.co.kr/learn/courses/30/lessons/42748
Source : programmers.co.kr
*/

function solution(array, commands) {
  // let array = [1,5,2,6,3,7,4];
  // let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
  // 명령 = [2,5,3];
  // 2번째부터 5번째까지 자른것 = [5,2,6,3];
  // 정렬한것 = [2,3,5,6];
  // 3번째것 = [5]

  // commands 탐색한다.
  // 각각 array에있는 배열에 접근
  // 접근한 배열의 첫번째요소는 frstNum 변수지정
  // 두번째 요소는 secondNum 변수지정
  // 세번째 요소는 thridNum 변수지정

  // array slice 를 사용해서 firstNum 부터 secondNum 까지 자른것을 sliceArr 변수에 저장
  // sliceArr 를 정렬한다.
  // 정렬한것의 thridNum 인덱스를 result에 push 한다.
  let result = [];
  commands.forEach((ele) => {
    let firstNum = ele[0];
    let secondNum = ele[1];
    let thridNum = ele[2];
    let sliceArr = array.slice(firstNum - 1, secondNum);
    let sortArr = sliceArr.sort(function (a, b) {
      return a - b;
    });
    result.push(sliceArr[thridNum - 1]);
  });
  return result;
}
