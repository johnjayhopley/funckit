/**
 * @brief Collection hasMany
 * @author John Hopley <jhopley@readingroom.com>
 * @details Joins entries from one collection to
 * multiple others using a primary and foreign key to
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
 *  const info = [
 *    {
 *      id: 1,
 *      person_id: 2,
 *      bio: 'Steff loves his ginger locks.'
 *    }
 *  ];
 *
 *  hasMany(people, 'id', 'person_id', addresses, info)
 *  => [{
 *    id: 2,
 *    name: 'steff',
 *    age: 27,
 *    address: {
 *      id: 1,
 *      person_id: 2,
 *      postcode: 'l12pa'
 *    },
 *    info: {
 *      id: 1,
 *      person_id: 2,
 *      bio: 'Steff loves his ginger locks.'
 *    }
 *  }]
 *
 * @param  {Collection} collection
 * @param  {String} primaryKey
 * @param  {String} foreignKey
 * @param. {...Collection} collections
 * @return {Collection}
 */
import hasMany from './hasMany';

const hasMany = (collection, primaryKey, foreignKey, collections) => {
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

  let cltn = collection;

  Object.keys(collections).forEach((prop) => {
    if(!Array.isArray(collections[prop])) {
      throw new Error(
        'All collection are expected to a collections ([{},..])',
      );
    }

    cltn = hasOne(cltn, collections[prop], primaryKey, foreignKey, prop)
  });

  return cltn;
};