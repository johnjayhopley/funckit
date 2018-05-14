/**
 * @brief Collection where
 * @author John Hopley <jhopley@readingroom.com>
 * @details Takes in a collection returns only the
 * items that watch the conditions (object:param2)
 * let people = [
 *   {
 *     name: 'John Hopley',
 *     jobcode: 12,
 *     office: 'Liverpool'
 *   },
 *   {
 *     name: 'Lee Easeman',
 *     jobcode: 12,
 *     office: 'London'
 *   },
 *   {
 *     name: 'Eric Jones',
 *     jobcode: 14,
 *     office: 'Liverpool'
 *   }
 * ];
 *
 * where(people, {jobcode: 14, office: 'Liverpool'})
 * => [{
 *   name: 'Eric Jones',
 *   jobcode: 14,
 *   office: 'Liverpool'
 * }]
 *
 * @param  {Collection} collection
 * @param  {Object} condition
 * @return {Collection}
 */
import intersection from '../array/intersection';

const where = (collection, condition) => {
  const conditionCount = Object.keys(condition).length;

  return collection.filter((value) => {
    const intersec = intersection(Object.keys(condition), Object.keys(value));
    if (intersec.length === conditionCount) {
      const values = {};

      intersec.forEach(prop => Object.assign(values, { [prop]: value[prop] }));
      return JSON.stringify(values) === JSON.stringify(condition);
    }
    return false;
  });
};

export default where;
