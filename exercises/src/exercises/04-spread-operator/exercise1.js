// Exercise: Spread-Operator - merge arrays
//
// re-implement this function to merge the given arguments into a new array
// - by only using spread operator
// - without using for-loop / helper-functions

export function merge(array1, array2) {
  let merged = [];
  addAll(array1, merged);
  addAll(array2, merged);
  return merged;
}

function addAll(source, destination) {
  if (source && typeof source === 'object' && source.length) {
    destination.push(...source);
  }
  
}