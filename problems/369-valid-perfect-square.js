/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  const sqrt = Math.sqrt(num);
  return Math.pow(parseInt(sqrt), 2) === num;
};

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  return Math.pow(parseInt(Math.sqrt(num)), 2) === num;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(4));
console.log(isPerfectSquare(14));
