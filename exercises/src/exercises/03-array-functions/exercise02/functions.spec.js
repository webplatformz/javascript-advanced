import { greaterThan } from "./functions";
import { smallerThan } from "./functions";
import { equalTo } from "./functions";

const NUMBERS = [-3, -2, -1, 0, 0, 1, 2, 3];

describe("functions", () => {

  it("should filter numbers greater then 1", () => {
    expect(/* TODO: replace >>>*/ greaterThan(NUMBERS, 1) /* <<< */).toEqual([2, 3]);
  });

  it("should filter numbers smaller than 2", () => {
    expect(/* TODO: replace >>>*/ smallerThan(NUMBERS, 2) /* <<< */).toEqual([-3, -2, -1, 0, 0, 1]);
  });

  it("should filter numbers equal to 0", () => {
    expect(/* TODO: replace >>> */ equalTo(NUMBERS, 0) /* <<< */).toEqual([0, 0]);
  });

});
