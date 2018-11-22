describe("function throwing exception", () => {

    it("is impure", () => {

        // expressed meaning: throw an exception whenever the divisor equals 0
        function divide(dividend, divisor) {
            if (divisor === 0) throw new Error("Can't divide by 0.");
            return dividend / divisor;
        }

    });

});