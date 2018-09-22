import { hasDogOlderThan } from './some.js';
import { hasCatEqualTo } from './some.js';
import { hasHamsters } from './some.js';
import { hasNoMouse } from './some.js';
import { ANIMALS } from '../mock-data.js';

describe("some", () => {

  it("has dog older than 6", () => {
    expect(/* TODO: replace >>> */ hasDogOlderThan(ANIMALS, 6) /* <<< */).toBeTruthy();
  });

  it("has cat equal to 1", () => {
    expect(/* TODO: replace >>> */ hasCatEqualTo(ANIMALS, 1) /* <<< */).toBeTruthy();
  });

  it("has at least one hamster", () => {
    expect(/* TODO: replace >>> */ hasHamsters(ANIMALS) /* <<< */).toBeTruthy();
  });

  it("has no mouse", () => {
    expect(/* TODO: replace >>> */ hasNoMouse(ANIMALS) /* <<< */).toBeFalsy();
  });

});
