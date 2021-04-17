/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  console.log(toBinary(2147483647));
  console.log(toBinary(2147483648));
  console.log(toBinary(2147483649));
  // console.log(toBinary(-123));
};

var toBinary = function (num) {
  return num.toString(2);
};

// only for testing
reverse();
