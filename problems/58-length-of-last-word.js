/**
 * @param {string} s
 * @return {number}
 */
// My Solution
var lengthOfLastWord1 = function (s) {
  const strArr = s.split(' ');
  let curr = strArr.length - 1;
  while (curr >= 0 && strArr[curr].length <= 0) {
    curr--;
  }
  if (curr >= 0) {
    return strArr[curr].length;
  }
  return 0;
};

var lengthOfLastWord = function (s) {
  return s.trim().split(' ').pop().length;
};
