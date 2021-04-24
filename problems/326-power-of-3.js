/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree1 = function (n) {
  if (n <= 0) return false;
  while (n > 1) {
    if (n % 3 !== 0) {
      return false;
    }
    n = Math.floor(n / 3);
  }
  return true;
};

var isPowerOfThree = function (n) {
  const inPow3 = n.toString(3);
  return inPow3.toString().search(/^1[0]*$/gm) >= 0;
};
