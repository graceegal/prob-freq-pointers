"use strict";

/**
 * Given an array of key and an array of values, return an object created from
 * these keys and values. If there are not enough values, the rest of keys
 * should have a value of null. If there not enough keys, just ignore the rest
 * of the values.
 *
 * Examples:
 *   twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3])
 *     // {'a': 1, 'b': 2, 'c': 3, 'd': null}
 *
 *   twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4])
 *     // {'a': 1, 'b': 2, 'c': 3}
 *
 *   twoArrayObject(['x', 'y', 'z'], [1, 2])
 *     // {'x': 1, 'y': 2, 'z': null}
 */

function twoArrayObject(keys, vals) {
  const out = {};

  for (let i = 0; i < keys.length; i++) {
    out[keys[i]] = (i < vals.length) ? vals[i] : null;
  }

  return out;
}
