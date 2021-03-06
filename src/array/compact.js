/**
 * @brief Array Compact
 * @author John Hopley <jhopley@readingroom.com>
 * @details Removes and null, false and undefined
 * values from the passed array
 *
 * compact(1,false, undefined,null,2)
 * => [1,2]
 *
 * @param  {Array} arr
 * @return {Array}
 */
const compact = arr => arr.filter(x => !!x);

export default compact;
