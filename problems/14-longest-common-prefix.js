/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length <= 0) return '';
  let currPrefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    currPrefix = getLongestCommonPrefix(currPrefix, strs[i]);
    if (currPrefix.length === 0) {
      break;
    }
  }

  return currPrefix;
};

var getLongestCommonPrefix = function (str1, str2) {
  let prefixStr = '';
  // const maxLoop = Math.min(str1.length, str2.length);
  for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
    if (str1[i] === str2[i]) {
      prefixStr += str1[i];
    } else {
      break;
    }
  }
  return prefixStr;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
