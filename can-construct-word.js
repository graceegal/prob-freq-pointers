'use strict';

/**
 input: word, letters (both strings)
 output: true/false
 ONLY LOWERCASE! NO SPACE OR PUNCTUATION!

 testcases:
 canConstructWord('aa', 'abc');
  // false -- can't build "aa" with only 1 "a"

canConstructWord('abc', 'dcba');
  // true -- can build "abc" with letters "abcd"

canConstructWord('aabb', 'bcabad');
  // true -- can build "aabbcc" with those letters
 */

/** Takes strings, word and letters, and checks if word can be constructed from
 * characters in letters. Returns true or false.
 */
function canConstructWord(word, letters) {
  // TODO: add a fast failure (ie: if word.length > letters.length return false)
  //create freq counter for word
  const wordCounter = createFrequencyCounter(word);
  //create freq counter for letters
  const letterCounter = createFrequencyCounter(letters);

  //loop through word freq counter
  for (let char in wordCounter) {
    //&& check that wordFreq[letter] <= lettersFreq[letter]
    //if false, return false
    if (!(char in letterCounter)) return false;
    if (wordCounter[char] > letterCounter[char]) return false;
  }

  return true;
}


/** given an iterable, create a frequency counter of items in iterable  */

function createFrequencyCounter(items) {
  const freqs = {};

  for (let item of items) {
    const count = freqs[item] || 0;
    freqs[item] = count + 1;
  }

  return freqs;
}
