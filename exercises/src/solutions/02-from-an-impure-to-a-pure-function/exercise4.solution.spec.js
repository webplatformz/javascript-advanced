describe("function throwing exception", () => {

  it("is pure", () => {

    // solution: remove the side-effect by not throwing the exception
    // remark: although this is a simple solution it is not very practical in a non purely functional language
    function divide(dividend, divisor) {
      if (divisor === 0) {
        return {
          value: NaN,
          error: new Error("Can't divide by 0."),
        }
      }
      return {
        value: dividend / divisor,
        error: undefined,
      };
    }

  });

  // be aware: the control-statement try-catch-finally is a side-effect
  it("is still impure", () => {

    function divide(dividend, divisor) {
      try {
        return dividend / divisor;
      } catch (error) {
        return NaN;
      }
    }

  });

});