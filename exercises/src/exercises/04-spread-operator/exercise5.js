// Exercise: Spread-Operator - beyond create and merge
//
// re-implement this function 
// - without using apply()

export function performWithArguments(callback, args) { 
  return callback.apply(null, args);
}

export function performWithVariableArguments(callback, ...args) {
  let allButFirst = [...arguments].slice(1);
  return callback.apply(null, allButFirst);
}