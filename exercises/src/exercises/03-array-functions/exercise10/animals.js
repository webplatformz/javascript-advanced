// Exercise: combining operators
//
// rewrite all exported functions to make use of filter(), map() and reduce()
// refactor the code and reduce code duplication
//
// NOTE: you do not need to adapt the test-case
// HINT: think small, this is take only 3 lines of code

export function sumInDogYears(animals) {
  let sum = 0;
  if (animals) {
    for (let index in animals) {
      let animal = animals[index];
      if (animal && animal.type == 'dog') {
        sum += animal.age;
      }
    }
  }
  return sum;
}

export function sumInHumanYears(animals) {
  let sum = 0;
  if (animals) {
    for (let index in animals) {
      let animal = animals[index];
      if (animal && animal.type == 'dog') {
        sum += animal.age * 7;
      }
    }
  }
  return sum;
}