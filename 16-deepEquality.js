/**
 * Write a function that, given two objects, returns whether or not the two
 * are deeply equivalent--meaning the structure of the two objects is the
 * same, and so is the structure of each of their corresponding descendants.
 *
 * Examples:
 *
 * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
 * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
 *
 * don't worry about handling cyclical object structures.
 *
 */
var deepEquals = function (apple, orange) {
  // var a = { foo: 'bar' };
  // var b = { foo: 'bar' };  true
  // // var a = { foo: 'bar' }; false
  // var b = { foo: 'pow' };
  // var a = { foo: 'bar', biz: 'baz' }; false
  // var b = { foo:'bar' };
  // var a = { foo: 1, b: { c: 3 } }; false
  // var b = { foo: 1, b: { c:'potato' } };
  if (apple === {} && orange === {}) {
    return true;
  }

  for (let i in apple) {
    for (let j in orange) {
      if (i === j && apple[i] === orange) {
        return true;
      } else {
        return false;
      }
    }
  }
};
