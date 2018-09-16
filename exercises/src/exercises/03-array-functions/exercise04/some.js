// Exercise: any match, includes any, contains any
//
// 1) rewrite the exported functions to use only pure functions
// 2) provide the contains any functionality for ALL animals
//
// NOTE: you will need to adapt the test-cases !
// HINT: some(fnFilter)

export function hasDogOlderThan(animals, age) {
  return findFirstDogOlderThan(animals, age) !== null;
}

export function hasCatEqualTo(animals, age) {
  return findFirstCatEqualTo(animals, age) !== null;
}

export function hasHamsters(animals) {
  for (let animal of animals) {
    if (isHamster(animal)) {
      return true;
    }
  }
  return false;
}

export function hasNoMouse(animals) {
  for (let animal of animals) {
    if (!isNoMouse(animal)) {
      return false;
    }
  }
  return true;
}

function isHamster(animal) {
  return animal && animal.type === 'hamster';
}

function isNoMouse(animal) {
  return animal && animal.type === 'mouse';
}

function findFirstDogOlderThan(animals, age) {
  for (let animal of animals) {
    if (animal && animal.type === 'dog' && animal.age > age) {
      return animal;
    }
  }
  return null;
}

function findFirstCatEqualTo(animals, age) {
  for (let animal of animals) {
    if (animal && animal.type === 'cat' && animal.age == age) {
      return animal;
    }
  }
  return null;
}