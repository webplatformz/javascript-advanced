describe("are mutate(), reduce() and reducer pure or impure ?", () => {

  it("is pure | impure", () => {

    function log() {
      console.log("Hello World");
    }

    function doSomething(fn) {
      if (1 === 0) {
        fn();
      }
      return 1;
    }

    let result = doSomething(log);

    console.log("--- exercise 09");
    console.log(result);

  });

});

