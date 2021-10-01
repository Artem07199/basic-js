import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  result = '';
while (i < str.length) {
  for (let count = 1; str[i] === str[i + count]; count++) {}
  result += str[i] + count;
  i += count; 
}
}
