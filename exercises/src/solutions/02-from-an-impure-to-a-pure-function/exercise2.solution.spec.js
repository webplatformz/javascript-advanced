describe("method referencing external state", () => {

  it("is pure", () => {

    // solution: remove the reference and inject the initial value directly
    function count(counter) {
      while (counter < 5) {
        counter += 1;
      }
    }
    
    count(5);

  });

});