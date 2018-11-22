export function sum(numbers) {
  return (numbers || [])
    .filter(each => Number.isFinite(each))
    .reduce((each, sum) => sum + each);
}

export function concat(strings, delimiter) {
  return (strings || [])
    .filter(each => !!each)
    .reduce((result, each, index) => index === 0 ? each : result + delimiter + each, '')
}

export function tallyAnimals(animals) {
  return animals
    .filter(animal => !!animal && !!animal.type)
    .reduce((accumulator, animal) => {
      accumulator[animal.type] = (accumulator[animal.type] || 0) + 1;
      return accumulator;
    }, {});
}

export function group(people, attributeName, collector) {
  return (people || [])
    .reduce((accumulator, person) => {
      let attributeValue = person[attributeName];
      (accumulator[attributeValue] || (accumulator[attributeValue] = [])).push(collector(person));
      return accumulator;
    }, {});
}