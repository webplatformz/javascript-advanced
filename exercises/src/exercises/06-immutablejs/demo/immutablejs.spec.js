import { List, Range, fromJS } from 'immutable';

// Immutable.js is more than immutability
// With immutable, completely side-effect-free data structures you can do cool stuff !

describe("cool stuff with Immutable.js", () => {

  it('allows batched mutations', () => {
    const list1 = List([1, 2, 3]);
    const list2 = list1.withMutations(function (list) { // works like a batch
      list.push(4).push(5).push(6);
    });
    expect(list1.size).toEqual(3);
    expect(list2.size).toEqual(6);
  });

  it('streaming like api', () => {
    let range = Range(1, Infinity)
      .skip(1000)
      .map(n => -n)
      .filter(n => n % 2 === 0)
      .take(2)
      .reduce((r, n) => r * n , 1); // processes -1002, -1004
    expect(range).toEqual(1006008);
  });

  it('can deep merge objects very easily', () => {
    let obj1 = fromJS({ a:1, b: { c: 1, d: [1,2,3,4], f: {g: 1}}});
    let obj2 = fromJS({ z: 9, b: { c: 7, d: [3,4,5], f: 1 } });

    expect(obj1 === obj2).toBeFalsy();
    expect(obj1 == obj2).toBeFalsy();

    let merge1 = obj1.mergeDeep(obj2);
    let merge2 = obj2.mergeDeep(obj1);

    expect(obj1 === merge1 && obj1 === merge2).toBeFalsy(); // the merged objects are new objects !
    expect(obj2 === merge1 && obj2 === merge2).toBeFalsy();
    expect(merge1 === merge2).toBeFalsy();

    expect(JSON.stringify(merge1)).toEqual('{"a":1,"b":{"c":7,"d":[3,4,5,4],"f":1},"z":9}');
    expect(JSON.stringify(merge2)).toEqual('{"z":9,"b":{"c":1,"d":[1,2,3,4],"f":{"g":1}},"a":1}');

  });

});