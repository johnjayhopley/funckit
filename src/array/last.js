/**
 * @brief Array last
 * @author John Hopley <jhopley@readingroom.com>
 * @details Retuns the last value of the passed in array
 *
 * Flatten([1,2,3,4,5])
 * => 5
 *
 * @param  {Array} arr
 * @return {Array}
 */
const last = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Last() expects argument one to be type of Array');
  }
  return arr[arr.length - 1];
};

export default last;
