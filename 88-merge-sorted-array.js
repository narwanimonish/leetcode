/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// This solution I have written
var merge1 = function (nums1, m, nums2, n) {
  if (nums2.length === 0) return;

  let i = 0,
    currX = 0,
    currY = 0;

  while (i < m) {
    if (nums1[currX] > nums2[currY]) {
      nums1.splice(nums1.length - 1, 1);
      nums1.splice(currX, 0, nums2[currY]);
      currY++;
    } else {
      i++;
    }
    currX++;
  }

  while (currY < n) {
    nums1[currX] = nums2[currY];
    currX++;
    currY++;
  }
};

// I got an Idea from existing soln on LeetCode
var merge = function (nums1, m, nums2, n) {
  while (m > 0 && n > 0) {
    if (nums1[m - 1] >= nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    }
  }
  while (n > 0) {
    nums1[m + n - 1] = nums2[n - 1];
    n--;
  }
};
