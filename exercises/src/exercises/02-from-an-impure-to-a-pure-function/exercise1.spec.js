describe("method mutating external state", () => {

  it("is impure", () => {

    function increment(obj) {
      return obj && obj.value++ && obj;
    }

    let object = { value: 1 };
    let result = increment(object);

  });

});