/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    const mod3 = i % 3,
      mod5 = i % 5;
    if (mod3 === 0 && mod5 === 0) {
      result.push('FizzBuzz');
    } else if (mod3 === 0) {
      result.push('Fizz');
    } else if (mod5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i.toString());
    }
  }

  return result;
};
