import { performWithArguments } from './exercise5.solution.js';
import { performWithVariableArguments } from './exercise5.solution.js';

describe("beyong create and merge", () => {

  it("callback with arguments", () => {
    expect(performWithArguments((a, b) => a + b, [1, 2])).toEqual(3);
    expect(performWithArguments((a, b, c) => a + b + c, [1, 2, 3])).toEqual(6);
    expect(performWithArguments((a, b, c, d) => a + b + c + d, [1, 2, 3, 4])).toEqual(10);
    expect(performWithArguments((...args) => Math.max(...args), [1, 2, -5, 99, 23])).toEqual(99);
  });

  it("yet another use case - make this test work !", () => {
    expect(performWithVariableArguments((args) => Math.max(...args), 1, 2, -5, 99, 23)).toEqual(99);
  });

});