// new data structure, not javascript native !
import { List } from 'immutable';

const DATA = [1, 2, 3];
const DATA_PLUS_4 = [1, 2, 3, 4];

describe("array.push()", () => {

  it('should have no side-effect', () => {
    let list = new List(DATA); // create new array
    list.push(4); // push without side-effect

    expect(list).toEqual(new List(DATA));
  });

  it("should return a shallow copy", () => {
    let list = new List(DATA);
    let newList = list.push(4); // returns a new array

    expect(list === newList).toBeFalsy(); // it really is a new object
    expect(list == newList).toBeFalsy();

    expect(list).toEqual(new List(DATA)); // still the same
    expect(newList).toEqual(new List(DATA_PLUS_4)); // the new object has one element more
  });

});