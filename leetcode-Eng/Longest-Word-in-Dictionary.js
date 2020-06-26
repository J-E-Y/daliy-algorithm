/*
Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order.

If there is no answer, return the empty string.

Example 1:

Input:  words = ["w","wo","wor","worl", "world"]
Output: "world"
Explanation: 
The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".


Example 2:

Input:  words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
Output: "apple"
Explanation: 
Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
Note:

All the strings in the input will only contain lowercase letters.
The length of words will be in the range [1, 1000].
The length of words[i] will be in the range [1, 30].

*/

var longestWord = function (words) {
  let map = new Map();
  let longest = '',
    longestLength = 0;
  words.sort((a, b) => a.length - b.length);
  for (let i = 0; i < words.length; i++) {
    if (
      words[i].length == 1 ||
      map.get(words[i].slice(0, words[i].length - 1))
    ) {
      if (!longestLength) {
        longestLength = words[i].length;
        longest = words[i];
      } else {
        longest =
          longest.length < words[i].length
            ? words[i]
            : words[i] < longest
            ? words[i]
            : longest;
      }
      map.set(words[i], 1);
    }
  }
  return longest;
};
