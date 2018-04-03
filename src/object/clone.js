/**
 * @brief Objects clone
 * @author John Hopley <jhopley@readingroom.com>
 * @dependency {object.isObject}
 * @details Returns clone of immutable object
 *
 * clone({name: 'John Hopley'})
 * => {name: 'John Hopley'}
 *
 * @param  {Object} obj
 * @return {Object}
 */
import isObject from './isObject';

const clone = (obj) => {
  if (!isObject(obj)) {
    throw new Error(
      'Clone expects argument one to be type of object',
    );
  }
  return Object.assign({}, obj);
};

export default clone;
