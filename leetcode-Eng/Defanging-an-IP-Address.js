/*

Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

 

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
 

*/

var defangIPaddr = function (address) {
  var array = [];
  var arr3 = [];
  var ele = '.';
  var hehe = address;

  hehe.split('.').forEach((e) => {
    arr3.push(e);
    arr3.push(ele);
  });

  arr3.pop();

  arr3.forEach((e) => {
    if (Number(e) || e === '0') {
      array.push(e);
    } else {
      array.push('[' + e + ']');
    }
  });
  console.log('??:', array.join(''));
  return array.join('');
};
