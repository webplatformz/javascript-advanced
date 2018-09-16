import { flatten, deepFlatten } from './flatMap.solution.js';

describe("flatMap", () => {

  it("should flatten an array of arrays to a simple flat array", () => {
    expect(flatten([[1, 2], [3, 4, 5], [], [6, 7, 8], [9]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("should deeply flatten an array of arrays to a simple flat array", () => {
    expect(deepFlatten([[1, 2], [3, [4], 5], [], [6, [[7, []], 8]], [[[]], 9]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

});