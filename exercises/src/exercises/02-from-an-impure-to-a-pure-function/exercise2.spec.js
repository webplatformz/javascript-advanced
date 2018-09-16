describe("method referencing external state", () => {

  var counter = 1;

  it("is impure", () => {

    function count() {
      while (counter < 5) {
        counter += 1;
      }
    }

  });

});