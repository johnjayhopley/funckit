/**
 * @brief Array Chunks
 * @author John Hopley <jhopley@readingroom.com>
 * @details Splits array into chunks using the specifed size.
 *
 * chunks([1,2,3,4,5,6,7,8,9, 10], 3)
 * => [[1,2,3],[4,5,6],[7,8,9],[10]]
 *
 * @param  {Array} arr
 * @param  {Number} size
 * @return {Array}
 */
const chunk = (arr, size) => {
  if (!Array.isArray(arr)) {
    throw new Error('Chunk expects argument one to be type of array.');
  }

  const len = {
    length: Math.ceil(arr.length / size),
  };

  return Array.from(len).map((value, index) => (
    arr.slice(index * size, (index * size) + size)
  ));

};

export default chunk;
