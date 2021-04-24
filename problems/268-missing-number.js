/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  let sumN = (n * (n + 1)) / 2;
  nums.map((x) => (sumN -= x));
  return sumN;
};
