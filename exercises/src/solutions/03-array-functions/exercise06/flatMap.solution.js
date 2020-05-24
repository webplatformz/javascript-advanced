export function flatten(arrays) {
  return arrays.flatMap(each => each);
}

export function deepFlatten(input) {
  return input.flat(5);
}
