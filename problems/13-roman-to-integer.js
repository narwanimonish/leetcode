/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let mapping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const valuesArr = s.split('').map((romanLetter) => {
    return mapping[romanLetter];
  });
  const result = valuesArr.reduce((accumulator, currVal, index) => {
    if (valuesArr[index + 1] && currVal < valuesArr[index + 1]) {
      return accumulator - currVal;
    }
    return accumulator + currVal;
  }, 0);

  return result;
};

romanToInt('LVIII');
romanToInt('MCMXCIV');
