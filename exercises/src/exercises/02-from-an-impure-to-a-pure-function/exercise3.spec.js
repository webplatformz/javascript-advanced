import browserEnv from 'browser-env';
browserEnv();

describe("method getDocument referencing external/global state", () => {

  it("is impure", () => {

    function getDocument() {
      return window.document;
    }
    getDocument()

  });

});