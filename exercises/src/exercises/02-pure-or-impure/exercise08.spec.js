describe("is sort() pure or impure ?", () => {

  it("is pure | impure", () => {
    
    const array = [8, 4, 1, 6, 8, 0];

    function sort(list) {
      console.log("sorted:" + (list = list.slice().sort()));
      return list;
    }

    let result = sort(array);
    

    console.log("--- exercise 08");
    console.log(result);

  });

});

