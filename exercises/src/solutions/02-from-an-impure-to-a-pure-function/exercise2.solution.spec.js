describe("method referencing external state", () => {

    it("is pure", () => {

        // solution: remove the reference and inject the initial value directly
        function count(iterations) {
            let counter = iterations;
            while (counter < 5) {
                counter += 1;
            }
            return counter;
        }

        count(5);

    });

});
