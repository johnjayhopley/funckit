/**
 * @brief Array occurrences
 * @author John Hopley <jhopley@readingroom.com>
 * @details Returns the amount of occurrences
 * of a value in the passed array
 *
 * occurrences([1,2,1,2,1,2,1],2)
 * => 3
 *
 * @param  {Array} arr
 * @param  {Array} needle
 * @return {Array}
 */
const occurrences = (arr, needle) => {
  if (!Array.isArray(arr)) {
    throw new Error(
      'Occurrences expects argument one to be type of Array',
    );
  }

  let occurs = 0;

  arr.forEach((item) => {
    if (item === needle) {
      occurs += 1;
    }
  });

  return occurs;
};

export default occurrences;
