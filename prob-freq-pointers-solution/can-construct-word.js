"use strict";

/**
 * Given word and available letters, determine if word can be built from letters.
 * Returns true/false.
 *
 * Strategy:
 * Build two frequency counters. If any of the message characters are not
 *  found in the 'letters' characters, or if there are not enough of them,
 *  return false. Otherwise return true.
 */

function canConstructWord(word, letters) {
  // useful fast failure: we definitely can't do this if word > letters
  if (word.length > letters.length) return false;

  const availLettersFreqs = getFreqCount(letters);
  const wordLettersFreqs = getFreqCount(word);

  for (const char in wordLettersFreqs) {
    const charFreq = availLettersFreqs[char] || 0;
    if (wordLettersFreqs[char] > charFreq) return false;
  }

  return true;
}

/** Given an iterable, return object of chars->frequencies */

function getFreqCount(items) {
  const freqs = {};

  for (const item of items) {
    freqs[item] = ++freqs[item] || 1;
  }

  return freqs;
}
