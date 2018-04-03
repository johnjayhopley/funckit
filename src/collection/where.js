/**
 * @brief Collection where
 * @author John Hopley <jhopley@readingroom.com>
 * @details !!!This needs amending to
 * take an object as the second paramater
 *
 * @param  {Collection} collection
 * @param  {String} property
 * @param  {String|Int} property
 * @return {Collection}
 */
const where = (collection, condition) => {
  const conditionLen = Object.keys(condition).length;

  return collection.filter((value) => {
    if(intersection(Object.keys(condition), Object.keys(value)).length === conditionLen) {
      let isMatch = false;
      for(const item of Object.entries(condition)) {
        isMatch = (value[item[0]] === item[1]) ? true : false;
      }
      return isMatch;
    }
  })
};

export default where;
