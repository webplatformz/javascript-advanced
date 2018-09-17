describe("is mutate() pure or impure ?", () => {

  it("is pure | impure", () => {

    const immutable = { a: 1, b: 2, c: 3 };

    function mutate(object) {
      return object;
    }

    let result = mutate(immutable);

    console.log("--- exercise 07");
    console.log(result);

  });

});

