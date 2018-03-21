/**
 * @brief Array Flatten
 * @author John Hopley <jhopley@readingroom.com>
 * @details Flattens nested arrays
 *
 * flatten([1,[2],[[3]]])
 * => [1,2,3]
 *
 * @param  {Array} arr
 * @return {Array}
 */
const flatten = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Flatten expects argument one to be type of array.');
  }
  return [].concat(...arr);
};

export default flatten;
