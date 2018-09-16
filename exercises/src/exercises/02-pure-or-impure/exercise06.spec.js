describe("is map() pure or impure ?", () => {

  it("is pure | impure", () => {

    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    let map = function (array) {
      for (var i = 0; i < array.length; i++) {
        setTimeout(() => array[i]++, 0);
      }
      return array;
    }

    let result = map(array);

    console.log("--- exercise 06");
    console.log(result);

  });

});

