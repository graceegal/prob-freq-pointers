"use strict";

/** Given an array of integers, and a number, find the number of pairs of
 * integers in the array whose sum is equal to the second parameter. You can
 * assume that there will be no duplicate values in the array.
 */

function countPairs(nums, targetNum) {
  nums.sort((a, b) => a - b);

  let count = 0;
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const sum = nums[start] + nums[end];

    if (sum === targetNum) {
      count++;
      start++;
      end--;
    } else if (sum < targetNum) {
      start++;
    } else {
      end--;
    }
  }
  return count;
}
