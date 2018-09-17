describe("is doNothing() pure or impure ? What about Math.random() ?", () => {

  it("is pure | impure", () => {

    function doNothing(fn) {
      return fn;
    }

    let result = doNothing(Math.random);

    console.log("--- exercise 10");
    console.log(result);

  });

});


