/**
 * @brief Number isNumber
 * @author John Hopley <jhopley@readingroom.com>
 * @details Returns true is the passed
 * argument is type of number
 *
 * isNumber(5)
 * => true
 *
 * isNumber('5')
 * => false
 *
 * @param  {Any} value
 * @return {Number}
 */
const isNumber = value => (
  Number.isInteger(value) && !Number.isNaN(value)
);

export default isNumber;
