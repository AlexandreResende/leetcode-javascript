const assert = require('assert');

const morseCode = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
};


/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = (words) => {
  const wordsConvertedToMorse = words.map(transformWordIntoMorseCode);

  return countDifferentRepresentations(wordsConvertedToMorse);
};

const transformWordIntoMorseCode = (word) => {
  const splittedWord = word.split('');

  return splittedWord.reduce((acc, letter) => acc + morseCode[letter], '');
};

const countDifferentRepresentations = (morseWordsArray) => {
  const result = [];

  morseWordsArray.map(word => {
    if (!result.includes(word)) result.push(word);
  });

  return result.length;
};

assert.equal(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']), 2);
