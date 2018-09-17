describe("is sum() pure or impure ?", () => {
  
  it("is pure | impure", () => {

    let sum = function(a, b) {
      return a + b;
    };

    let result = sum(1, 2);

    console.log("--- exercise 01");
    console.log(result);

  });

});
