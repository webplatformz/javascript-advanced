describe("function throwing exception", () => {

  it("is impure", () => {

    function divide(dividend, divisor) {
      if (divisor === 0) throw new Error("Can't divide by 0.");
      return dividend / divisor;
    }

  });

});