const assert = require('assert');

/**
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = (inputString) => {
    const outputArray = [];
    let inputStringCopy = inputString.slice();

    while(inputStringCopy !== '') {
      let composition = getPrimitiveDecomposition(inputStringCopy);

      outputArray.push(composition);

      inputStringCopy = inputStringCopy.substring(composition.length);
    }

    return removeOuterParenthesesFromArrayElements(outputArray).join('');
};

const getPrimitiveDecomposition = (parenthesisCompositionString) => {
  let index;
  let opening = 0;

  for (let counter = 0; counter <= parenthesisCompositionString.length; counter++) {
    if (counter !== 0 && opening === 0) {
      index = counter;
      break;
    }
    else if (parenthesisCompositionString[counter] === '(') {
      opening++;
    } else if (parenthesisCompositionString[counter] === ')') {
      opening--;
    }
  }

  return parenthesisCompositionString.substring(0, index);
};

const removeOuterParenthesesFromArrayElements = (arrayOfString) => {
  return arrayOfString.map(parenthesisString => parenthesisString.substring(1, parenthesisString.length - 1));
};

assert.equal(removeOuterParentheses('(()())(())'), '()()()');
assert.equal(removeOuterParentheses('(()())(())(()(()))'), '()()()()(())');
assert.equal(removeOuterParentheses('()()'), '');
