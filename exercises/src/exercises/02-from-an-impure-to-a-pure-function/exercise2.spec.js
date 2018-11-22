describe("method referencing external state", () => {

    var counter = 1;

    it("is impure", () => {

        // expressed meaning: increment the variable counter while it is smaller than 5
        function count() {
            while (counter < 5) {
                counter += 1;
            }
        }

    });

});