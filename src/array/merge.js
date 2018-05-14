/**
 * @brief Array merge
 * @author John Hopley <jhopley@readingroom.com>
 * @details Meges all values from all
 * passed in array arugments in to the
 * onw array
 *
 * merge([1,2,3,4],[5,6,7,8],[9,10])
 * => [1,2,3,4,5,6,7,8,9,10]
 *
 * @param  {Array} args
 * @return {Array}
 */
const merge = (...args) => (
  args.reduce((index, value) => [...index, ...value])
);

export default merge;
