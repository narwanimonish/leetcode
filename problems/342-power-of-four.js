/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  return n.toString(4).search(/^1[0]*$/) >= 0;
};
