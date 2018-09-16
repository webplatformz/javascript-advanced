// DO NOT MODIFY >>>
var flatMap = require('array.prototype.flatmap');
delete Array.prototype.flatMap;
var shimmedFlatMap = flatMap.shim();
// <<< DO NOT MODIFY


export function flatten(arrays) {
  return arrays.flatMap(each => each);
}

export function deepFlatten(input) {
  let reduceOne = (accumulator, element) => {
    if (!!element) {
      accumulator.push(element);
    } 
    return accumulator;
  };
  let reduceMany = (accumulator, element) => {
    element
      .filter(each => !!each)
      .forEach(each => reducer(accumulator, each));
    return accumulator;
  };
  let reducer = (accumulator, element) => {
    return Array.isArray(element) ? reduceMany(accumulator, element) : reduceOne(accumulator, element);
  };
  return reducer([], input);
}