// Exercise: Spread-Operator - beyond create and merge
//
// re-implement this function ...
// - by only using spread operator
// - without using for-loop

export function min(args) {
  let minimum = null;
  for (let next of args) {
    if (!minimum || next < minimum) {
      minimum = next;
    }
  }
  return minimum;
}