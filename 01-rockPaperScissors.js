/* eslint-disable no-console */
/*
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (n) {
  if (n === undefined) {
    n = 3;
  }
  let arr = [];
  let rpcArr = [];
  Rpc();
  function Rpc() {
    for (let i = 0; i < 3; i++) {
      let rpc = ["rock", "paper", "scissors"];
      let randomindex = Math.floor(Math.random() * 3);
      rpcArr.push(rpc[randomindex]);
    }
    arr.push(rpcArr);
    return arr;
  }
  return arr;
};

console.log(rockPaperScissors(5));
