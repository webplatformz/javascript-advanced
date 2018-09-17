// new data structure, not javascript native !
import { List } from 'immutable';

const DATA = [3, 2, 4, 9, 1, 7, 8];
const DATA_SORTED = [1, 2, 3, 4, 7, 8, 9];

describe("array.sort()", () => {

  it('should have no side-effect', () => {
    let list = new List(DATA); // create new array
    list.sort();

    // this only works in sandbox.io
    expect(list).toEqual(new List(DATA));
    expect(list.equals(new List(DATA))).toBeTruthy();
  });

  it("should return a shallow copy, sorted", () => {
    let list = new List(DATA);
    let newList = list.sort(); // returns a new array

    expect(list === newList).toBeFalsy(); // it really is a new object
    expect(list == newList).toBeFalsy();

    // this only works in sandbox.io
    //expect(list).toEqual(new List(DATA)); // still the same
    expect(list.equals(new List(DATA))).toBeTruthy(); // still the same
    // this only works in sandbox.io
    //expect(newList).toEqual(new List(DATA_SORTED)); // the new instance is sorted
    expect(newList.equals(new List(DATA_SORTED))).toBeTruthy(); // the new instance is sorted
    
  });

});