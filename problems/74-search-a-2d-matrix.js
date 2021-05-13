/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 1. Search the row in which target is present
  let left = 0,
    right = matrix.length - 1;
  let row = null,
    foundTarget = false;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (matrix[mid][0] === target) {
      foundTarget = true;
      break;
    } else if (matrix[mid][0] > target) {
      right = mid - 1;
    } else if (
      matrix[mid][0] < target &&
      target <= matrix[mid][matrix[mid].length - 1]
    ) {
      row = mid;
      break;
    } else {
      left = mid + 1;
    }
  }
  if (foundTarget) return true;
  if (!foundTarget && row === null) return false;

  // 2. Search on that particular row to find index of target
  left = 1;
  right = matrix[row].length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (matrix[row][mid] === target) return true;
    if (matrix[row][mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    17
  )
);
