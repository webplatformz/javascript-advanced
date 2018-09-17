// new data structure, not javascript native !
import { Map } from 'immutable';

const DATA = {a:1, b:2, c:3, d:4};
const DATA_MODIFIED = { a: 1, b: 2, c: 3, d: 99 };

describe("map.set()", () => {

  it('should have no side-effect', () => {
    let map = new Map(DATA); // create new map (~object)
    map.set('d', 99);

    expect(map).toEqual(new Map(DATA));
  });

  it("should return a shallow copy", () => {
    let map = new Map(DATA); // create new map (~object)
    let newMap = map.set('d', 99);

    expect(map === newMap).toBeFalsy(); // it really is a new object
    expect(map == newMap).toBeFalsy();

    expect(map).toEqual(new Map(DATA)); // still the same
    expect(newMap).toEqual(new Map(DATA_MODIFIED)); // the new instance is sorted
  });

});