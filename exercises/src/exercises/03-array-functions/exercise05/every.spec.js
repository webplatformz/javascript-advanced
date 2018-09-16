import { ANIMALS } from '../mock-data.js';

import { allAnimalsHaveFourLegs } from './every.js';

describe("every", () => {

  it("check whether all animals have 4 legs", () => {
    expect(/* TODO: replace >>> */ allAnimalsHaveFourLegs(ANIMALS) /* <<< */).toBeFalsy();
  });

});