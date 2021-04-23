/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let decryptedStr = '';
  for (let i = s.length - 1; i >= 0; i--) {
    let encryptedNum;
    if (s[i] === '#') {
      encryptedNum = s[i - 2] + s[i - 1];
      i -= 2;
    } else if (s.charCodeAt(i) >= 49 && s.charCodeAt(i) <= 60) {
      encryptedNum = s[i];
    }
    decryptedStr =
      String.fromCharCode(96 + parseInt(encryptedNum)) + decryptedStr;
  }
  return decryptedStr;
};

console.log(freqAlphabets('10#11#12'));
