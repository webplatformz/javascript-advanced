export function performWithArguments(callback, args) {
  return callback(...args);
}

export function performWithVariableArguments(callback, ...args) {
  return callback(args);
}