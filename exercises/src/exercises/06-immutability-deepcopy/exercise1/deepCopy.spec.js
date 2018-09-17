import { deepCopy } from './deepCopy';
import { DATA } from '../mock-data';

describe("deep copying arbitrary objects", () => {

  it('should deep copy the given object', () => {
    let source = DATA;
    let copy = deepCopy(source);

    expect(copy === source).toBeFalsy();
    expect(copy == source).toBeFalsy();

    expect(copy.items === source.items).toBeFalsy();
    expect(copy.items == source.items).toBeFalsy();

    verifyDeeply(copy, source);
  });

});

function verifyDeeply(copy, source) {
  let copyType = typeof copy;
  let sourceType = typeof source;
  expect(copyType).toEqual(sourceType);

  if (Array.isArray(source)) {
    verifyArray(copy, source);
  } else if (sourceType === 'object') {
    verifyObject(copy, source);
  } else {
    expect(copy).toEqual(source);
  }
}

function verifyArray(copy, source) {
  expect(copy === source).toBeFalsy();
  expect(copy.length === source.length).toBeTruthy();
  expect(copy == source).toBeFalsy();
  source.forEach((each, index) => verifyDeeply(copy[index], each));
}

function verifyObject(copy, source) {
  expect(Object.keys(copy)).toEqual(Object.keys(source));
  Object.keys(source).forEach(key => verifyObjectEntry(key, copy, source));
}

function verifyObjectEntry(key, copy, source) {
  expect(copy === source).toBeFalsy(); 
  expect(copy == source).toBeFalsy();
  let copyValue = copy[key];
  let sourceValue = source[key];
  verifyDeeply(copyValue, sourceValue);
}