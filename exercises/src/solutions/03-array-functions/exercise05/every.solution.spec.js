import { ANIMALS } from '../mock-data.js';

describe("every", () => {

  it("all animals have 4 legs", () => {
    expect(ANIMALS.every(each => each && each.legs === 4)).toBeFalsy();
  });

});