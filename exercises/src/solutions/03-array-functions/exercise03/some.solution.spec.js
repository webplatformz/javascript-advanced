import { ANIMALS } from '../mock-data.js';

describe("find+some", () => {

    it("has dog older than 6", () => {
        expect(ANIMALS.some(each => each.type === 'dog' && each.age > 6)).toBeTruthy();
    });

    it("has cat equal to 1", () => {
        expect(ANIMALS.some(each => each.type === 'cat' && each.age === 1)).toBeTruthy();
    });

    it("has at least one hamster", () => {
        expect(ANIMALS.some(each => each.type === 'hamster')).toBeTruthy();
    });

    it("has no mouse", () => {
        expect(!ANIMALS.some(each => each.type === 'mouse')).toBeFalsy();
    });

});
