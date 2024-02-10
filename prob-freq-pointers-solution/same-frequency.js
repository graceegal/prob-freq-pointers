"use strict";

/** Given two positive integers, find out
 * if the two numbers have the same frequency of digits.
 */

function sameFrequency(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  const freqs1 = {};
  for (const d of str1) {
    freqs1[d] = (freqs1[d] || 0) + 1;
  }

  const freqs2 = {};
  for (const d of str2) {
    freqs2[d] = (freqs2[d] || 0) + 1;
  }

  return Object.keys(freqs1).every(d => freqs1[d] === freqs2[d]);
}
