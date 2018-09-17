// Exercise: Spread-Operator - merge objects
//
// re-implement this function to merge the given arguments into a new object
// - by only using spread operator
// - without using for-loop / helper-functions

export function merge(o1, o2) {
  let result = {};
  mergeObject(o1, result);
  mergeObject(o2, result);
  return result;
}

function mergeObject(source, destination) {
  if (source && typeof source === 'object') {
    for (let key of Object.keys(source)) {
      destination[key] = source[key];
    }
  }
}