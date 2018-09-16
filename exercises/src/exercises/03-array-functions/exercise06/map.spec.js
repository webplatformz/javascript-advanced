import { PEOPLE } from '../mock-data.js';
import { getAliasOfPeople } from "./map";


describe("map", () => {

  it("should get alias of people", () => {
    expect(/* TODO: replace >>> */ getAliasOfPeople(PEOPLE) /* <<< */ ).toEqual(['CHKO', 'PAWA', 'STRE']);
    expect(/* TODO: replace >>> */ getAliasOfPeople(PEOPLE, 1) /* <<< */ ).toEqual(['ck', 'pw', 'sr']);
  });

});
