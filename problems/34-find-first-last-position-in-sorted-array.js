/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) {
      let targetStart = -1,
        targetEnd = -1,
        tempCount = 0;
      while (mid - tempCount - 1 >= 0 && nums[mid - tempCount - 1] === target)
        tempCount++;
      targetStart = mid - tempCount;
      targetEnd = mid;
      while (nums[targetEnd + 1] === target) targetEnd++;

      return [targetStart, targetEnd];
    }
    if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return [-1, -1];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([8, 8, 8, 8, 8, 8], 8));
