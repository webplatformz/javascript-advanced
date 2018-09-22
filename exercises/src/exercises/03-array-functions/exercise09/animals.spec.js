import { sumInDogYears } from './animals.js';
import { sumInHumanYears } from './animals.js';
import { ANIMALS } from '../mock-data.js';

describe("statistics", () => {

  it("should sum up the dog age of all dogs", () => {
    expect(sumInDogYears(ANIMALS)).toEqual(17);
    expect(sumInDogYears([])).toEqual(0);
    expect(sumInDogYears(null)).toEqual(0);
  });

  it("should sum up the human age of all dogs", () => {
    expect(sumInHumanYears(ANIMALS)).toEqual(119);
    expect(sumInHumanYears([])).toEqual(0);
    expect(sumInHumanYears(null)).toEqual(0);
  });

});