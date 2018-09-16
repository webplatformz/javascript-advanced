import { toArray } from './exercise3.solution.js';

describe("create objects", () => {

  it("should already work as expected", () => {
    expect(toArray()).toEqual([]);
    expect(toArray(1, 2)).toEqual([1, 2]);
    expect(toArray(0, 1, 2, 3, 4)).toEqual([0, 1, 2, 3, 4]);
  });

  it("should also work - make this test work !", () => {
    expect(toArray(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(toArray(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    expect(toArray(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(toArray(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  });

  it("you should use spread operator, not append fn-arguments !", () => {
    let length = toArray.prototype.constructor.length;
    expect(length === 0 || length === 10).toBeTruthy();
  });

});