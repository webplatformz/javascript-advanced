describe("is sum() pure or impure ?", () => {

  it("is pure | impure", () => {
 
    let a = 0;
    let b = 1;

    let sum = function(a, b) {
      return a = a + b;
    }

    let result = sum(a, b);

    console.log("--- exercise 04");
    console.log(result);
    
  });

});