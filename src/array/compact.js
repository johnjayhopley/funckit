/**
 * @brief Array Compact
 * @author John Hopley <jhopley@readingroom.com>
 * @details Removes and null, false and undefined
 * values from the passed array
 *
 * compact(1,fasle, undefined,null,2)
 * => [1,2]
 *
 * @param  {Array} arr
 * @return {Array}
 */
const compact = (arr) => {
  return arr.filter(x => !!x)cvbf
}

export default compact;