"use strict";

/** Given two strings, check * whether the characters in the first string
 *  form a subsequence of the characters * in the second string. */

function isSubsequence(s1, s2) {
  if (!s1) return true;

  let i1 = 0;
  let i2 = 0;

  while (i2 < s2.length) {
    if (s2[i2] === s1[i1]) {
      i1 += 1;
    }
    if (i1 === s1.length) {
      return true;
    }
    i2 += 1;
  }

  return false;
}

