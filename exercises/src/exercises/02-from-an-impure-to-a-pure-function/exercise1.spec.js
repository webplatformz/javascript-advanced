describe("method mutating external state", () => {

    it("is impure", () => {

        // expressed meaning: increment the property #value of the given object
        function increment(obj) {
            return obj && obj.value++ && obj;
        }

        let object = { value: 1 };
        let result = increment(object);

    });

});