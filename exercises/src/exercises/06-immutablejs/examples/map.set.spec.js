// new data structure, not javascript native !
import { Map } from 'immutable';

const DATA = {a:1, b:2, c:3, d:4};
const DATA_MODIFIED = { a: 1, b: 2, c: 3, d: 99 };

describe("map.set()", () => {

  it('should have no side-effect', () => {
    let map = new Map(DATA); // create new map (~object)
    map.set('d', 99);

    // this only works in sandbox.io
    //expect(map).toEqual(new Map(DATA));
    expect(map.equals(new Map(DATA))).toBeTruthy();
  });

  it("should return a shallow copy", () => {
    let map = new Map(DATA); // create new map (~object)
    let newMap = map.set('d', 99);

    expect(map === newMap).toBeFalsy(); // it really is a new object
    expect(map == newMap).toBeFalsy();

    // this only works in sandbox.io
    //expect(map).toEqual(new Map(DATA)); // still the same
    expect(map.equals(new Map(DATA))).toBeTruthy(); // still the same
    // this only works in sandbox.io
    //expect(newMap).toEqual(new Map(DATA_MODIFIED)); // the new instance is sorted
    expect(newMap.equals(new Map(DATA_MODIFIED))).toBeTruthy(); // the new instance is sorted
  });

});