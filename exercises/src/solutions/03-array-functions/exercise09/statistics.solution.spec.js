import { collect } from './statistics.solution.js';

describe("statistics", () => {

  it("should collect statistics about numbers", () => {
    expect(collect([-3, -2, -1, 0, 1, 2, 3])).toEqual({ count: 7, sum: 0, average: 0, min: -3, max: 3 });
  });

  if ("should ignore invalid numbers", () => {
    expect(collect(['0', null, undefined, 0, 1 / 0, 'abc'])).toEqual({ count: 1, sum: 0, average: 0, min: 0, max: 0 });
  });

  it("should return for no numbers", () => {
    expect(collect([])).toEqual({ count: 0, sum: undefined, average: undefined, min: undefined, max: undefined });
  });
});