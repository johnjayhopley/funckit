/**
 * @brief Object types
 * @author John Hopley <jhopley@readingroom.com>
 * @details Retuns an object describing
 * the property types of passed object
 *
 * types({
 *   doSomething: () => {},
 *   doNothing: false,
 *   count: 5,
 *   trigger: 'click',
 *   meta: {}
 * })
 *
 * => {
 *   doSomething: 'function'
 *   doNothing: 'boolean',
 *   count: 'number',
 *   trigger: 'string',
 *   meta: 'object'
 * }
 *
 * @param  {Object} obj
 * @return {Boolean}
 */
const types = (obj) => {
  const tps = {};

  Object.keys(obj).forEach((prop) => {
    let type;

    if (typeof obj[prop] === 'object') {
      if (Array.isArray(obj[prop])) {
        type = 'array';
      } else if (obj[prop] === null) {
        type = 'null';
      } else {
        type = 'object';
      }
    } else {
      type = typeof obj[prop];
    }
    tps[prop] = type;
  });

  return tps;
};

export default types;
