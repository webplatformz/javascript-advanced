describe("method getDocument referencing external/global state", () => {

    it("is impure", () => {

        // expressed meaning: access the document of the current window
        function getDocument() {
            return global.window.document;
        }
        getDocument()

    });

});