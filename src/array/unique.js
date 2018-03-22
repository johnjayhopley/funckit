/**
 * @brief Array unique
 * @author John Hopley <jhopley@readingroom.com>
 * @details Removes all dublicate entries
 * from the passed array
 *
 * unique([1,1,1,2,2,3])
 * => [1,2,3]
 *
 * @param  {Array} arr
 * @return {Array}
 */
const unique = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Unique expects agrument one to be type of array.');
  }
  return [...new Set(arr)];
};

export default unique;
