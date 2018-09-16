import { merge } from './exercise1.js';

describe("merge arrays", () => {

  it("should handle empty arguments", () => {
    expect(merge([], [])).toEqual([]);
  });

  it("should be merged", () => {
    expect(merge([1],[2,3])).toEqual([1,2,3]);
    expect(merge([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6]);
  });

  it("should not mutate", () => {
    let a1 = [1];
    let a2 = [2,3];
    let result = merge(a1,a2);
    expect(result === a1).toBeFalsy();
    expect(result === a2).toBeFalsy();
  });

});