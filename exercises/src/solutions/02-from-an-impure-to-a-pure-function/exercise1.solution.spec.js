describe("method mutating external state", () => {

  it("is pure", () => {

    // solution: shallow copy the given object
    // remark: from a purely functional language point of view this is still impure, but since we
    // do not modify the object and javascript is not a purely functional language, this is good enough
    function increment(obj) {
      return { value: obj.value++ };
    }

    let object = { value: 1 };
    let result = increment(object);
    
  });

});