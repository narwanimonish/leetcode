/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  return binSearch(nums, target);
  return binSearchR(nums, target, 0, nums.length - 1);
};

var binSearch = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = left + parseInt((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

var binSearchR = function (nums, target, left, right) {
  if (left > right) {
    return left;
  }
  let mid = left + parseInt((right - left) / 2);
  if (nums[mid] === target) {
    return mid;
  } else if (target < nums[mid]) {
    return binSearchR(nums, target, left, mid - 1);
  } else {
    return binSearchR(nums, target, mid + 1, right);
  }
};

let nums, target;
nums = [1, 3, 5, 6];
target = 2;

// nums = [1, 3, 5, 6];
// target = 5;

// nums = [1, 3, 5, 6];
// target = 7;
console.log(searchInsert(nums, target));
