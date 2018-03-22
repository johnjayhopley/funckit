/**
 * @brief Number between
 * @author John Hopley <jhopley@readingroom.com>
 * @details Returns a random number between
 * the min and max given in aurguments
 *
 * between(5,10)
 * => 6
 *
 * @param  {Number} min
*  @param  {Nubmer} max
 * @return {Number}
 */
const between = (min, max) => (
  Math.floor((Math.random() * (max - min)) + (1 + min))
);

export default between;
