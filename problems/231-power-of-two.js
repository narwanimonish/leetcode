/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return n.toString(2).search(/^1[0]*$/) >= 0;
};
