/**
 * @brief Array pick
 * @author John Hopley <jhopley@readingroom.com>
 * @dependency {number.isNumber}
 * @details Retuns the array value by index
 * if it exists in the given array
 *
 * pick(['John', 'Is', 'King'], 2)
 * => 'King'
 *
 * @param  {Array} arr
 * @param  {Array} index
 * @return {Array}
 */
import isNumber from './../number/isNumber';

const pick = (arr, index) => {
  if (!Array.isArray(arr)) {
    throw new Error('Pick expects argument one to be type of Array');
  } else if (!isNumber(index)) {
    throw new Error('Pick expects argument two to be type of Number (int).');
  }

  if (arr[index] === undefined) {
    return false;
  }
  return arr[index];
};

export default pick;
