export function deepCopy(object) {
  if (typeof object === 'object') {
    if (Array.isArray(object)) {
      return object.map(each => deepCopy(each));
    } else {
      return Object.keys(object).reduce((copy,key) => Object.assign({...copy, [key]: deepCopy(object[key]) }), {});
    }
  } else {
    return object;
  }
};