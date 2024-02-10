"use strict";

/**
 * input: 2 positive numbers
 * output: true/false
 *
 * testcases:
 * sameFrequency(123, 321);   // true
sameFrequency(34, 14);     // false
sameFrequency(22, 22);     // true
sameFrequency(22, 222);    // false
 */

/**
 *Takes two positive integers. Check if two numbers haves same frequency of
 digits. Returns true or false.
 */
function sameFrequency(num1, num2) {
  //create frequency counter for input 1
  const num1Counts = createFrequencyCounter(num1.toString());
  //create frequency counter for input 2
  const num2Counts = createFrequencyCounter(num2.toString());

  // TODO: can add a fast failure here (if input lengths are different return false)
  //loop through counter1,
  for (let digit in num1Counts) {
    //if counter1's value !== counter2's value, return false
    if (num1Counts[digit] !== num2Counts[digit]) return false;
  }
  //return true
  return true;
}

/**
 * Takes iterable item. Returns object with frequency of occurences for each
 * item.
 */
function createFrequencyCounter(items) {
  let itemCounts = {};

  for (let item of items) {
    const count = itemCounts[item] || 0;
    itemCounts[item] = count+1;
  }

  return itemCounts;
}
