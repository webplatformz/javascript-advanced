import { positiveNumbersIncludingZero } from "./filter";

describe("filter", () => {

    it("should handle empty input", () => {
        expect(positiveNumbersIncludingZero([])).toEqual([]);
    });

    it("should filter positive numbers", () => {
        expect(positiveNumbersIncludingZero([-1, 2, 1, -2, -1, 1])).toEqual([2,1,1]);
    });

    it("should filter positive numbers including 0", () => {
        expect(positiveNumbersIncludingZero([-1, 2, 1, -2, 0, -1, 1])).toEqual([2,1,0,1]);
    });

});
