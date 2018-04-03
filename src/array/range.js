/**
 * @brief Array range
 * @author John Hopley <jhopley@readingroom.com>
 * @dependency {number.isNumber}
 * @details Retuns the values of an array
 * between the start and end arguments
 *
 * range([1,2,3,4,5,6,7,8,9], 4, 9)
 * => [5,6,7,8,9]
 *
 * @param  {Array} arr
 * @param  {Number} start
 * @param  {Number} end
 * @return {Array}
 */
import isNumber from './../number/isNumber';

const range = (arr = [], start, end) => {
  if (!Array.isArray(arr)) {
    throw new Error('Range expects argument one to be type of Array');
  } else if (!isNumber(start) || !isNumber(end)) {
    throw new Error('Rage expects argument two and three to be type of Number');
  }

  return arr.filter((value, index) => {
    if (index >= start && index <= end) {
      return true;
    }
    return false;
  });
};

export default range;
