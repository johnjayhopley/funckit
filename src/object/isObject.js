/**
 * @brief Objects isObject
 * @author John Hopley <jhopley@readingroom.com>
 * @details Checks if the passed in argument
 * is type of Object
 *
 * @param  {Any} value
 * @return {Boolean}
 */
const isObject = value => (
  value && typeof value === 'object' && !Array.isArray(value)
);

export default isObject;
