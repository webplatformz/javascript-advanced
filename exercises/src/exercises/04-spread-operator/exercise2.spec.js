import { merge } from './exercise2.js';

describe("merge objects", () => {

  it("should handle empty arguments", () => {
    expect(merge({}, {})).toEqual({});
    expect(merge({}, null)).toEqual({});
    expect(merge(null, {})).toEqual({});
  });

  it("should be merged", () => {
    let result = merge({ a: 1, b: 2, c: 3 }, { z: 1 });
    expect(result).toEqual({ a: 1, b: 2, c: 3, z: 1 });
    expect(result).toEqual({ z: 1, a: 1, b: 2, c: 3 });
    expect(result).toEqual({ a: 1, z: 1, b: 2, c: 3 });
  });

  it("should not mutate", () => {
    let o1 = { a: 1, b: 2, c: 3 };
    let o2 = { z: 1 };
    let result = merge(o1, o2);
    expect(result === o1).toBeFalsy();
    expect(result === o2).toBeFalsy();
  });

});