/*
Level : 1 
question : https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript
source : programmers.co.kr

*/

function solution(board, moves) {
  let basket = [];
  let count = 0;
  moves.forEach((v) => {
    const element = filtered(board, v - 1);
    if (element) {
      if (basket[basket.length - 1] === element) {
        basket.pop();
        count = count + 2;
      } else {
        basket.push(element);
      }
    }
  });

  return count;
}

// filtered 함수는
// moves에서 걸린 뽑인 인형들을 출력해낸다.

function filtered(board, index) {
  const newBoard = board;
  for (let i = 0; i < newBoard.length; i++) {
    if (newBoard[i][index] !== 0) {
      const element = newBoard[i][index];
      newBoard[i][index] = 0;
      return element;
    }
  }
}
