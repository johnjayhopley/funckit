/**
 * @brief Array shuffle
 * @author John Hopley <jhopley@readingroom.com>
 * @details Returns all the values from the
 * passed array in a randomised order
 *
 * shuffle([1,2,3,4,5,6])
 * => [2,5,4,1,3,6]
 *
 * @param  {Array} arr
 * @return {Array}
 */
const shuffle = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Random expects argument one to be type of array.');
  }

  return arr.map(val => [Math.random(), val]).sort((a, b) => a[0] - b[0]).map(
    a => a[1],
  );
};

export default shuffle;
