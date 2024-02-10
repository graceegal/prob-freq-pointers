"use strict";

/**
 *inputs: array of non-zero numbers
 output: input array reordered so positive numbers on the left and negatives on
 right.

 testcases:
    separatePositive([2, -1, -3, 6]);         // [2, 6, -3, -1]
    separatePositive([-5, 5]);                // [5, -5]
    separatePositive([1, 2, 3]);              // [1, 2, 3]
 */


// TODO: include specific example in docString
/**
 *Takes an array of non-zero numbers. Reorders input array so positive numbers
 are on left and negatives are on right. Return reordered array (does not need to
  be sorted).
  *
  * Examples:
 *   separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
 *   separatePositive([5, 10, -15, 20, 25])   // [5, 10, 25, 20, -15]
 *   separatePositive([-5, 5])                // [5, -5]
 *   separatePositive([1, 2, 3])              // [1, 2, 3]
 */

function separatePositive(nums) {
  //initialize left = 0, right = nums.length-1
  let left = 0;
  let right = nums.length - 1;
  //while (left < right)
  while (left < right) {
    //if (left < 0 && right > 0) switch elements at left and right
    if (nums[left] < 0 && nums[right] > 0) {
      // TODO: trick to flip values of 2 things -- element this from the solution
        //could replace below 3 lines: [nums[left], nums[right]] = [nums[right], nums[left]];
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    } else {
      if (nums[left] > 0) left++;
      if (nums[right] < 0) right--;
    }
  }

  return nums;
}
