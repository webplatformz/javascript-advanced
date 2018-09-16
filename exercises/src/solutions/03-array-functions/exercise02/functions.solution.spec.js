describe("filter", () => {

  const NUMBERS = [-3, -2, -1, 0, 0, 1, 2, 3];

  it("should filter numbers greater then 1", () => {
    expect(NUMBERS.filter(each => each > 1)).toEqual([2, 3]);
  });

  it("should filter numbers smaller than 2", () => {
    expect(NUMBERS.filter(each => each < 2)).toEqual([-3, -2, -1, 0, 0, 1]);
  });

  it("should filter numbers equal to 0", () => {
    expect(NUMBERS.filter(each => each === 0)).toEqual([0, 0]);
  });

});
