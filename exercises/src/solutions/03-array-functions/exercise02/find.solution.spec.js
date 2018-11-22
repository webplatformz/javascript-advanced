import { ANIMALS } from '../mock-data.js';

describe("find+some", () => {

    it("find the first dog older than 6", () => {
        let rambo = {
            name: "Rambo",
            age: 9,
            type: "dog",
            legs: 2,
        };
        expect(ANIMALS.find(each => each.type === 'dog' && each.age > 6)).toEqual(rambo);
    });

    it("find the first cat equal to 1", () => {
        let red = {
            name: "Red",
            age: 1,
            type: "cat",
            legs: 4,
        };
        expect(ANIMALS.find(each => each.type === 'cat' && each.age === 1)).toEqual(red);
    });

    it("find the first hamster older than 4", () => {
        expect(ANIMALS.find(each => each.type === 'hamster' && each.age >= 4)).toBeUndefined();
    });

    it("find the first mouse of age 7", () => {
        let joey = {
            name: "Joey",
            age: 7,
            type: "mouse",
            legs: 4,
        };
        expect(ANIMALS.find(each => each.type === 'mouse' && each.age === 7)).toEqual(joey);
    });

});
