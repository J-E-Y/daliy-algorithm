/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

// fractionConverter
var toFraction = function (number) {
  // 숫자를 우선 나눈다.
  var numbers = String(number).split("");
  // .을 찾는다.
  var numPosition = numbers.indexOf(".");
  //
  var numbersAfter = numbers.slice(numPosition + 1);

  var count = numbersAfter.length;
  var places = "1";
  for (var i = 0; i < count; i++) {
    places += "0";
  }
  var upper = Math.floor(number * Number(places));
  var lower = Number(places);

  return newUpper + "/" + newLower;
};
