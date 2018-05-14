/**
 * @brief Objects objectFlatten
 * @author John Hopley <jhopley@readingroom.com>
 * @details Recursively flatten multidimensional objects
 *
 * objectFlatten({
 *   name: 'John Hopley',
 *   address: {
 *     postcode: 'xxxx',
 *     city: 'Liverpool'
 *   }
 * });
 *
 * => {
 *   '/name': 'John Hopley',
 *   '/address/postcode': 'xxxx',
 *   '/address/city': 'Liverpool',
 * }
 *
 * @param  {Object} obj
 * @return {Object}
 */
const objectFlatten = (obj) => {
  const _ftn = (piece, dir = '') => {
    return [].concat(
      ...Object.keys(piece).map((key) => {
        return typeof piece[key] === 'object' ?
          _ftn(piece[key], `${dir}/${key}`) : {
            [`${dir}/${key}`]: piece[key],
          };
      }),
    );
  };

  return Object.assign({}, ..._ftn(obj));
};

export default objectFlatten;
