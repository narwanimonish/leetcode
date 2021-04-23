/**
 * @param {number} num
 * @return {string}
 */
// My Solution
var intToRoman1 = function (num) {
  const intValues = [
    '1',
    '4',
    '5',
    '9',
    '10',
    '40',
    '50',
    '90',
    '100',
    '400',
    '500',
    '900',
    '1000',
  ];

  const romanLetters = [
    'I',
    'IV',
    'V',
    'IX',
    'X',
    'XL',
    'L',
    'XC',
    'C',
    'CD',
    'D',
    'CM',
    'M',
  ];

  let result = '';
  for (let i = 12; i >= 0; i--) {
    let q = parseInt(num / intValues[i]);
    num = num % intValues[i];

    while (q > 0) {
      result = result + romanLetters[i];
      q--;
    }
  }

  return result;
};

var intToRoman = function (num) {
  let m = ['', 'M', 'MM', 'MMM'];
  let c = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  let x = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  let i = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  return (
    m[parseInt(num / 1000)] +
    c[parseInt((num % 1000) / 100)] +
    x[parseInt((num % 100) / 10)] +
    i[num % 10]
  );
};

console.log(intToRoman(58));
console.log(intToRoman(9));
console.log(intToRoman(499));
console.log(intToRoman(1994));
