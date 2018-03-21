/**
 * @brief Array First
 * @author John Hopley <jhopley@readingroom.com>
 * @details Returns the first value of passed array
 *
 * diff([1,2,3,4])
 * => 1
 *
 * @param  {Array} first
 * @param  {Array} second
 * @return {Array}
 */
const first = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('First() expects argument one to be type of Array');
  }
  return arr[0];
};

export default first;
