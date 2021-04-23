/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const inputStack = stack();

  const input = s.split('');
  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    let popedEl;
    switch (element) {
      case '{':
      case '(':
      case '[':
        inputStack.push(element);
        break;
      case '}':
        popedEl = inputStack.pop();
        if (popedEl === '{') continue;
        else return false;
      case ')':
        popedEl = inputStack.pop();
        if (popedEl === '(') continue;
        else return false;
      case ']':
        popedEl = inputStack.pop();
        if (popedEl === '[') continue;
        else return false;
    }
  }
  if (inputStack.size() === 0) {
    return true;
  }
  return false;
};

const stack = () => {
  const stack = [];

  function push(item) {
    stack.push(item);
  }

  function pop() {
    return stack.pop();
  }

  function size() {
    return stack.length;
  }

  return {
    push,
    pop,
    size,
  };
};

console.log(isValid('{[()](){'));
console.log(isValid('[()]()'));
