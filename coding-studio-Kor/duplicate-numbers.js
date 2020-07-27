/*
0~9까지의 문자로 된 숫자를 입력 받았을 때, 이 입력 값이 0~9까지의 숫자가 각각 한 번 씩만 사용된 것인지 확인하는 함수를 구하시오.

sample inputs: 0123456789 01234 01234567890 6789012345 012322456789

sample outputs: true false false true false

*/

let arr = [];

let sumFunc = (num) => {
  for (let i = 0; i <= 9; i++) {
    let sum = (num + '').charAt(i) * 1;
    if (arr[sum] == null) {
      arr[sum] = sum;
    } else {
      return 'false';
    }
  }
  return 'true';
};

console.log(sumFunc(6789012345));
