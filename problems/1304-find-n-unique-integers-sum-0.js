/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(i * 2 - n + 1);
  }
  return result;
};

console.log(sumZero(5));
