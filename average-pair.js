'use strict';

/**
 * inputs: nums (array of numbers), targetAvg (number)
 * output: true/false
 * NUM IS SORTED ARRAY
 *
 * testcases:
 * averagePair([1, 2, 3], 2.5);         // true
 * averagePair([3, 3, 6, 12, 19], 8);   // false
 * averagePair([1, 2, 3], 2);           // true
 * averagePair([], 4);                  // false
 */

/**Takes in sorted array of numbers and targetAvg value. Checks if there is a pair
 * of numbers whose average equals targetAvg. Returns true or false.
  */

function averagePair(nums, targetAvg) {
  //declare index variables (left=0, right=nums.length-1)
  let left = 0;
  let right = nums.length - 1;
  //while (left < right)
  while (left < right) {
    //get avg = (nums[left] + nums[right]) / 2
    //if avg === targetAvg, return true
    //if (avg < targetAvg) left++
    //else right--
    const avg = (nums[left] + nums[right]) / 2;

    if (avg === targetAvg) return true;
    else if (avg < targetAvg) left++;
    else right--;
  }

  return false;
}

