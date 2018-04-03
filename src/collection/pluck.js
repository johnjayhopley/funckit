/**
 * @brief Collection Pluck
 * @author John Hopley <jhopley@readingroom.com>
 * @details Plucks and returns all instances of the
 * specified property in a collection of objects.
 *
 * let people = [
 *   {
 *     name: 'John Hopley',
 *     height: '6ft 6"',
 *     age 32,
 *    }
 *    {
 *      name: 'Cambo',
 *      height: '5ft 1"',
 *      age 54
 *    }
 * ];
 *
 * pluck(people, 'name');
 *
 * => ['John Hopley', 'Cambo']
 *
 * @param  {Collection} collection
 * @param  {String} property
 * @return {Collection}
 */
const pluck = (collection, property) => {
  return collection.map(value => value[property]);
}

export default pluck;


