// Exercise: High-Order Functions
//
// 1) convert the procedural code into a purely functional one
// 2) implement all 3 exported functions as one using functions as arguments (Higher Order Functions)
// 3) optional: remove the non-exported helper functions
// 4) optional: remove the use of this module by just using filter() in the test-case
//
// NOTE: this time, you will also need to adapt the test-case !
// HINT: filter(fnFilter)

export function greaterThan(list, refValue) {
  let numbers = [];
  for (let value of list) {
    if (isGreaterThan(refValue, value)) {
      numbers.push(value);
    }
  }
  return numbers;
};

export function smallerThan(list, refValue) {
  let numbers = [];
  for (let value of list) {
    if (isSmallerThan(refValue, value)) {
      numbers.push(value);
    }
  }
  return numbers;
};

export function equalTo(list, refValue) {
  let numbers = [];
  for (let value of list) {
    if (isEqualTo(refValue, value)) {
      numbers.push(value);
    }
  }
  return numbers;
};

function isGreaterThan(refValue, value) {
  return value > refValue;
};

function isSmallerThan(refValue, value) {
  return value < refValue;
};

function isEqualTo(refValue, value) {
  return value === refValue;
};