// Exercise: all match
//
// 1) rewrite the exported functions to use only pure functions
// 2) provide the all match functionality for ALL animals
//
// NOTE: you will need to adapt the test-cases !
// HINT: every(fnFilter)

export function allAnimalsHaveFourLegs(animals) {
  for (let animal of animals) {
    if (animal && hasFourLegs(animal)) {
      return false;
    }
  }
  return true;
}

function hasFourLegs(animal) {
  return animal.legs === 4;
}