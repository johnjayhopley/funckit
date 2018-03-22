/**
 * @brief Array Compress
 * @author John Hopley <jhopley@readingroom.com>
 * @details Takes in multiple array types and merges
 * into a new array accordingly
 *
 * compress([1,2,3,4],[5,6,7],[8,9,10])
 * => [[1,2,3,4],[5,6,7],[8,9,10]]
 *
 * @param  {Array} arr
 * @return {Array}
 */

const compress = (...arrays) => {
  arrays.forEach((arr, i) => {
    if (!Array.isArray(arr)) {
      throw new Error(
        `compress expects argument ${i + 1} to be of type Array.`,
      );
    }
  });
  return [...Array.from(arrays)];
};

export default compress;
