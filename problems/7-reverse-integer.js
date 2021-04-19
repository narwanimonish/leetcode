/**
 * @param {number} x
 * @return {number}
 */
// My Solution
var reverse1 = function (x) {
  const INT_MAX = 2 ** 31;
  let reverseNum = 0;
  let isNegative = x < 0 ? true : false;
  let num = isNegative ? x * -1 : x;

  while (num > 0) {
    let popDigit = num % 10;
    num = parseInt(num / 10);

    if (reverseNum > parseInt(INT_MAX / 10)) {
      return 0;
    }
    if (reverseNum == parseInt(INT_MAX / 10)) {
      if (isNegative && popDigit > 8) {
        return 0;
      } else if (!isNegative && popDigit > 7) {
        return 0;
      }
    }
    let tempResult = reverseNum * 10 + popDigit;
    reverseNum = tempResult;
  }
  return isNegative ? reverseNum * -1 : reverseNum;
};

var reverse = function (x) {
  const reversed =
    parseInt(Math.abs(x).toString().split('').reverse().join('')) *
    Math.sign(x);
  return reversed <= 0x7fffffff && reversed >= -0x80000000 ? reversed : 0;
};

// only for testing
console.log(reverse(1230));
console.log(reverse(-321));
console.log(reverse(2147483648));
console.log(reverse(-8463847412));
