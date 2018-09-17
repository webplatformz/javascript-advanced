// Exercise: Spread-Operator - create
//
// re-implement this function to accept / be called with any number of arguments
// - do not use use the special argument "arguments"
// - do not add additional arguments

export function toArray(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  return [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10].filter(each => each != undefined);
}