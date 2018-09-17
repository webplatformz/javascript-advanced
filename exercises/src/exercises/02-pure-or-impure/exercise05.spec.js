describe("is inc() pure or impure ?", () => {

  it("is pure | impure", () => {

    let a = 0;

    let inc = function (a) {
      return a++;
    }

    console.log("--- exercise 05");
    console.log(inc(a));

  });

});

