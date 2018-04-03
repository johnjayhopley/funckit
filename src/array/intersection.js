/**
 * @brief Array Intersection
 * @author James Coventry <james.coventry@readingroom.com>
 * @details Takes in multiple array types and returns
 * all values contained in every array
 *
 * intersection([1,2,3,4],[2,3,4],[1,2,2,3,3])
 * => [2,3]
 *
 * @param  {Array} arr
 * @return {Array}
 */
import first from './first';

const intersection = (...arrays) => {
  arrays.forEach((arr, i) => {
    if (!Array.isArray(arr)) {
      throw new Error(
        `Intersection expects argument ${i + 1} to be of type Array.`,
      );
    }
  });

  return first(arrays).filter(val =>
    arrays.slice(1).every(arr => arr.includes(val)));
};

export default intersection;
