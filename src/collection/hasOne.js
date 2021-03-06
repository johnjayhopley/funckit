/**
 * @brief Collection hasOne
 * @author John Hopley <jhopley@readingroom.com>
 * @details Joins entries from one collection to
 * another using a primary and foreign key to
 * identifiy the relationship
 *
 *  const people = [
 *    {
 *      id: 2,
 *      name: 'steff',
 *      age: 27,
 *    }
 *   ]
 *
 *  const addresses = [
 *    {
 *      id: 1,
 *      person_id: 2,
 *      postcode: 'l12pa'
 *    }
 *  ];
 *
 *  hasOne(people, addresses, 'id', 'person_id', 'address')
 *  => [{
 *    id: 2,
 *    name: 'steff',
 *    age: 27,
 *    address: {
 *      id: 1,
 *      person_id: 2,
 *      postcode: 'l12pa'
 *    }
 *  }]
 *
 * @param  {Collection} collection
 * @param  {Collection} Join
 * @param  {String} primaryKey
 * @param  {String} foreignKey
 * @return {Collection}
 */
const hasOne = (collection, join, primaryKey, foreignKey, key = 'hasOne') => {
  if (!Array.isArray(collection) || !Array.isArray(join)) {
    throw new Error(
      `HasOne expects agurment one and two to be
       type of Array (collection)`,
    );
  } else if (primaryKey === null) {
    throw new Error(
      `HasMany expects argument three to
       be type of string ${typeof primaryKey} given`,
    );
  } else if (foreignKey === undefined) {
    throw new Error(
      `HasMany expects argument three to
       be type of string ${typeof foreignKey} given`,
    );
  }

  const cltn = collection;

  collection.forEach((item, index) => {
    const id = item[primaryKey];

    cltn[index][key] = join.filter((tvalue) => {
      let macth = false;
      Object.keys(tvalue).forEach((prop) => {
        if (prop === foreignKey && tvalue[prop] === id) {
          macth = true;
        }
      });
      return macth;
    })[0];
  });

  return cltn;
};

export default hasOne;
