//! scrabble word calculator

//* implement the word_calc method to return the correct Scrabble word score. The scores are already set up for you to use and are managed within Dictionaries:

/*
one_point_values = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
two_point_values = ["d", "g"];
three_point_values = ["b", "c", "m", "p"];
four_point_values = ["f", "h", "v", "w", "y"];
five_point_values = ["k"];
eight_point_values = ["j","x"];
ten_point_values = ["z","q"];


word_calc("zoo") // 12
word_calc("bus") // 5


*/

//* solution 1

const char_points = {
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
  l: 1,
  n: 1,
  r: 1,
  s: 1,
  t: 1,
  d: 2,
  g: 2,
  b: 3,
  c: 3,
  m: 3,
  p: 3,
  f: 4,
  h: 4,
  v: 4,
  w: 4,
  y: 4,
  k: 5,
  j: 8,
  x: 8,
  z: 10,
  q: 10,
};

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function word_calc(w) {
  // convert your string array to relevant numbers
  const splitted_array = w.split('').map(function (item) {
    return char_points[item];
  });

  // You can use simple loop to sum up or reduce to reduce and sum the array
  const total = splitted_array.reduce(reducer);
  console.log(total);
}

word_calc('zoo'); // 12
word_calc('bus'); // 5

//* solution 2

function word_calc(w) {
  let total = 0;
  // convert your string array to relevant numbers and add it to the total
  w.split('').map(function (item) {
    total += char_points[item];
  });
  console.log(total);
}

word_calc('zoo'); // 12
word_calc('zoozoo'); // 24
word_calc('bus'); // 5
