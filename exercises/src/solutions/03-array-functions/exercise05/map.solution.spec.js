import { PEOPLE } from '../mock-data.js';


describe("map", () => {

  it("should get alias of people", () => {
    let twoLetters = (person) => person.firstname.slice(0, 2) + person.lastname.slice(0, 2);
    let uppercase = (alias) => alias.toUpperCase();
    expect(PEOPLE.map(twoLetters).map(uppercase)).toEqual(['CHKO', 'PAWA', 'STRE']);
    
    let oneLetter = (person) => person.firstname.slice(0, 1) + person.lastname.slice(0, 1);
    let lowercase = (alias) => alias.toLowerCase();
    expect(PEOPLE.map(oneLetter).map(lowercase)).toEqual(['ck', 'pw', 'sr']);
  });

});
