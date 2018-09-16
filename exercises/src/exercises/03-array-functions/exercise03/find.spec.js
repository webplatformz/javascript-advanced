import { findFirstDogOlderThan } from './find.js';
import { findFirstCatEqualTo } from './find.js';
import { findFirstHamsterOlderEquals } from './find.js';
import { findFirstMouseOfAge } from './find.js';
import { ANIMALS } from '../mock-data.js';

describe("find", () => {

  it("find the first dog older than", () => {
    let rambo = {
      name: "Rambo",
      age: 9,
      type: "dog",
      legs: 2,
    };
    expect(/* TODO: replace >>> */ findFirstDogOlderThan(ANIMALS, 6) /* <<< */).toEqual(rambo);
  });

  it("find the first cat equal to", () => {
    let red = {
      name: "Red",
      age: 1,
      type: "cat",
      legs: 4,
    };
    expect(/* TODO: replace >>>*/ findFirstCatEqualTo(ANIMALS, 1) /* <<< */).toEqual(red);
  });

  it ("find the first hamster older than 4", () => {
    expect(/* TODO: replace >>> */ findFirstHamsterOlderEquals(ANIMALS, 4) /* <<< */).toBeNull();
  });

  it("find the first mouse of age 7", () => {
    let joey = {
      name: "Joey",
      age: 7,
      type: "mouse",
      legs: 4,
    };
    expect(/* TODO: replace >>> */ findFirstMouseOfAge(ANIMALS, 7) /* <<< */).toEqual(joey);
  });

});
