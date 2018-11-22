import { normalizeNumber, normalizeString } from "./pipeline.js";

describe("pipeline", () => {
  it("should apply multiple functions on a number", () => {
    expect(normalizeNumber(87.78, 1.897, "CHF", 0)).toEqual("90.00 CHF");
    expect(normalizeNumber(99.99, 7.4568, "EUR", 4.5)).toEqual("102.00 EUR");
    expect(normalizeNumber(14.45, 6.5, "$", 1.55)).toEqual("14.00 $");
  });

  it("should apply multiple functions on a string", () => {
    expect(normalizeString(" Javascript  2018  rocks! ")).toEqual(
      "JAVASCRIPT ROCKS!"
    );
  });
});
