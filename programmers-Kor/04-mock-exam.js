/*
level : 1
question: https://programmers.co.kr/learn/courses/30/lessons/42840
source : source : programmers.co.kr

*/

function solution(answers) {
  let studentA = [1, 2, 3, 4, 5];
  let studentB = [2, 1, 2, 3, 2, 4, 2, 5];
  let studentC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let correct = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (studentA[i % studentA.length] === answers[i]) {
      correct[0] += 1;
    }
    if (studentB[i % studentB.length] === answers[i]) {
      correct[1] += 1;
    }
    if (studentC[i % studentC.length] === answers[i]) {
      correct[2] += 1;
    }
  }

  let maxCorrect = Math.max(correct[0], correct[1], correct[2]);
  let answer = [];
  let result = correct.forEach((curr, idx) => {
    if (curr === maxCorrect) {
      answer.push(idx + 1);
    }
  });
  return answer;
}
