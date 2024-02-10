"use strict";

/**
 * inputs: two possibly-different length arrays
 * outputs: object
 *
 * testcases:
 * twoArrayObject(['x', 'y', 'z'], [1, 2]);
  // {'x': 1, 'y': 2, 'z': null}

  twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]);
  // {'a': 1, 'b': 2, 'c': 3}
 */

/**
 * Takes two possibly-different length arrays and outputs an object containing
 * keys from first input array element with values of second input array
 * elements. If not enough elements in second input array, make values null. If
 * not enough elements in first input array, ignore values in second.
 */

function twoArrayObject(keys, values) {
  //initialize object
  let arrayObject = {};
  //loop through keys array
  for (let i = 0; i < keys.length; i++) {
    //if i > values.length-1, object[keys[i]] = null
    //else set object[keys[i]] = values[i]

    // TODO: this could be a good place to add a ternary to decide what the
    // value should be when assigning (ie: from input values arr or null)
    if (i > values.length-1) arrayObject[keys[i]] = null;
    else arrayObject[keys[i]] = values[i];
  }
  //return object
  return arrayObject;
}
