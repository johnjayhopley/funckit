/**
 * @brief Array Diff
 * @author John Hopley <jhopley@readingroom.com>
 * @details Retuns the diffrence between two arrays
 *
 * diff([1,2,3,4],[1,2,3,4,5,6,7])
 * => [5,6,7]
 *
 * @param  {Array} first
 * @param  {Array} second
 * @return {Array}
 */
const diff = (first, second) => {
  if (!Array.isArray(first) || !Array.isArray(second)) {
    throw new Error('Diff expects argument one and two to be type of array.');
  }

  return first.filter(value => second.includes(value));
};

export default diff;
