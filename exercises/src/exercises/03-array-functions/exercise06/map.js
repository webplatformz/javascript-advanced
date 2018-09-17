// Exercise: mapping
//
// 1) rewrite the exported function in a way it is no longer bound to its sibling members
// 2) remove the hardcoded length
// 3) make the method reusable, allow: variable length, uppercase and lowercase
//
// NOTE: you will also need to adapt the test-case !
// HINT: map(fnMapper) + map(fnMapper)

var MODUS = 0;

export function getAliasOfPeople(people, modus) {
  MODUS = !!modus ? modus : 0;
  let output = [];
  for (let index in people) {
    let person = people[index];
    let alias = getAliasOfPerson(person);
    output.push(alias);
  }
  return output;
};

function getAliasOfPerson(person) {
  return getCharsFromString(person.firstname) + getCharsFromString(person.lastname);
};

function getCharsFromString(value) {
  let length = MODUS === 0 ? 2 : 1;
  let chars = value.slice(0, length);
  return MODUS === 0 ? chars.toUpperCase() : chars.toLowerCase();
};