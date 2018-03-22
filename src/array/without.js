/**
 * @brief Array without
 * @author John Hopley <jhopley@readingroom.com>
 * @details Removes all specified values from the passed array
 *
 * without(['John', 'Cambo', 'Dan', 'Tom']], 'Tom', 'Dan');
 * => ['John', 'Cambo']
 *
 * @param  {Array} arr
 * @return {Array}
 */
const without = (...arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Without expects argument one to be type of Array');
  }

  const exclude = Array.from(arr).filter(i => i > 0);

  return arr[0].filter(value => !exclude.includes(value));
};

export default without;
