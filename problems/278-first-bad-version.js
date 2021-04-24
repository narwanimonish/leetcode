/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1,
      right = n;
    let lastBad = n;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      const isBad = isBadVersion(mid);
      if (isBad) {
        lastBad = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return lastBad;
  };
};
