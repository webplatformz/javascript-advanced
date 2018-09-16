import { min } from './exercise4.js';

describe("beyong create and merge", () => {

  it("min operator", () => {
    expect(min([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual(1);
    expect(min([-99, -1, 0, 1, 99])).toEqual(-99);
  });

});