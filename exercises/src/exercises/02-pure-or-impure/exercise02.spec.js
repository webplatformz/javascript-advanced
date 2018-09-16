describe("is sum() pure or impure ?", () => {

  it("is pure | impure", () => {

    var value1 = 1;
    var value2 = 2;

    let sum = function (a, b) {
      return a + b;
    };

    let result = sum(value1, value2);

    console.log("--- exercise 02");
    console.log(result);

  });

});
