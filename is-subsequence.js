/**
 * inputs: two strings, s1 & s2
 * output: true/false
 *
 * testcases:
 * isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting');        // true
isSubsequence('abc', 'acb');           // false (order matters)
 */

/**
 * Takes in two strings and checks if all characters in s1 appear in
 * order in s2. Returns true or false.
 */
function isSubsequence(s1, s2) {
  let idx2 = 0;
  //loop through s1
  for (let letter of s1) {
    //loop through s2 until we find letter
    while (idx2 < s2.length && s2[idx2] !== letter) {
      idx2++;
    }
    if (s2[idx2] !== letter) return false;
    idx2++;
  }

  return true;
}
