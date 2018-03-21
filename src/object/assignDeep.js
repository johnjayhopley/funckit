/**
 * @brief Objects deepAssign
 * @author John Hopley <jhopley@readingroom.com>
 * @details Extends recursively
 * over multidimensional objects using Object.assign.
 *
 * deepAssign({
 *   name: 'John',
 *   age: 25,
 *   info: {
 *     email: null,
 *   }
 * }, {
 *   info: {
 *     email: 'xxx@xxxx.com',
 *     address: {
 *       postcode: 'xxxx'
 *     }
 *   }
 *  })
 *
 *  => {
 *   name: 'John',
 *   age: 25,
 *   info: {
 *   email: 'xxx@xxxx.com',
 *   address: {
 *     postcode: 'xxxx'
 *   }
 * }
 *
 * @param  {Object} original
 * @param  {Object} target
 * @return {Object}
 */
import isObject from './isObject';

const assignDeep = (original, ...target) => {
  if (!target.length) {
    return original;
  }

  const source = target.shift();

  if (!isObject(original) || !isObject(source)) {
    throw new Error(
      'Assign recursive expects argument one and two to be type of object.',
    );
  }

  Object.keys(source).forEach((key) => {
    if (isObject(source[key])) {
      if (!original[key]) {
        Object.assign(original, { [key]: {} });
      }
      assignDeep(original[key], source[key]);
    } else {
      Object.assign(original, { [key]: source[key] });
    }
  });

  return assignDeep(original, ...target);
};

export default assignDeep;
