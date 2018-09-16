import { sum } from './reduce.js';
import { concat } from './reduce.js';
import { tallyAnimals } from './reduce.js';
import { group } from './reduce.js';
import { PEOPLE, ANIMALS } from '../mock-data';

describe("reduce", () => {
  
  it("should sum up all numbers", () => {
    expect(sum([1,1])).toEqual(2);
    expect(sum([1, 0])).toEqual(1);
    expect(sum([-1, 1, 0])).toEqual(0);
    expect(sum(['a', 1/0, 7, [], {}, Infinity, 0, null, '0', undefined])).toEqual(7);
  });

  it("should concat all strings", () => {
    expect(concat(['a', 'b', 'c'], ', ')).toEqual('a, b, c');
    expect(concat(['a', null, '', undefined, 'b'], '-')).toEqual('a-b');
    expect(concat([], '.')).toEqual('');
    expect(concat(null, '.')).toEqual('');
    expect(concat(undefined, '.')).toEqual('');
  });

  it("should tally animals", () => {
    expect(tallyAnimals(ANIMALS)).toEqual({ 
      "cat": 4, 
      "dog": 3, 
      "elefant": 1, 
      "hamster": 2, 
      "mouse": 3,
    });
  });

  it("should group people by office, but collect firstname only", () => {
    let result = {
      'Zürich': ['Christian','Patrick'],
      'Bern' : ['Stefan'],
    };
    expect(group(PEOPLE, 'office', person => person.firstname)).toEqual(result);
  });

});