/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString1 = function (s) {
  return s.reverse();
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString2 = function (s) {
  for (let i = 0; i < s.length - 1; i++) {
    const el = s.pop();
    s.splice(i, 0, el);
  }
  return s;
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let start = 0,
    end = s.length - 1;
  while (start < end) {
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;

    start++;
    end--;
  }
  return s;
};

console.log(reverseString(['a', 'b', 'c', 'd', 'e']));
