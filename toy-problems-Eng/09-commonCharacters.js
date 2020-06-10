/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function (string1, string2) {
  let result = "";
  var arr1 = string1.split("");
  var arr2 = string2.split("");
  arr2.forEach((letter) => {
    if (arr1.includes(letter) && !result.includes(letter)) {
      result += letter;
    }
  });
  return result;
};
