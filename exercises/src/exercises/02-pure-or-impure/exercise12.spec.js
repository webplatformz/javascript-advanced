describe("is divide() pure or impure ?", () => {

  it("is pure | impure", () => {

    function divide(dividend, divisor) {
      if (divisor === 0) throw new Error("Can't divide by 0.");
      return dividend / divisor;
    }

    let result = divide(1, 1);

    console.log("--- exercise 12");
    console.log(result);

  });

});




