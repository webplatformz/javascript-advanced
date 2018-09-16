const value1 = 1;

describe("is sum() pure or impure ?", () => {

  it("is pure | impure", () => {

    var b = 2;

    let sum = function (a, b) {
      return a + b;
    };

    let result = sum(value1, b);
    
    console.log("--- exercise 03");
    console.log(result);

  });
  
});
