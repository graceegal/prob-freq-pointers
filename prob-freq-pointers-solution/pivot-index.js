"use strict";

/**
 * Return pivot index where the sum of the items to the left equal to the sum
 * of the items to the right. If there are more than one valid pivot index,
 * return the smallest value.
 */

function pivotIndex(nums) {
  let sumR = nums.reduce((a, b) => a + b, 0);
  let sumL = 0;
  let pivotIdx = -1;

  for (let i = 0; i < nums.length; i++) {
    sumL += nums[i];
    if (sumL === sumR) {
      return i;
    }
    sumR -= nums[i];
  }

  return pivotIdx;
}
