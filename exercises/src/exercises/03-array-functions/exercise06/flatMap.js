// Exercise: flattening
//
// rewrite the flattening of the input array using functional style only
//
// NOTE: you do not need to adapt the test-case
// HINT: flatMap(fnMapper)

export function flatten(arrays) {
  let result = [];
  for (let outerElement of arrays) {
    for (let innerElement of outerElement) {
      result.push(innerElement);
    }
  }
  return result;
}

// Exercise: deep flattening
//
// flatMap does not allow you to deeply flatten an object/array but flat does
// 1) rewrite the deep flattening of the input array using flat()
//
// NOTE: you do not need to adapt the test-case
// HINT: none :)

export function deepFlatten(array) {
  return _deepFlatten(array, []);
}

export function _deepFlatten(array, accumulator) {
  if (Array.isArray(array)) {
    for (let arrayElement of array) {
      if (Array.isArray(arrayElement)) {
        _deepFlatten(arrayElement, accumulator);
      } else if (!!arrayElement) {
        accumulator.push(arrayElement);
      }
    }
  }
  return accumulator;
}