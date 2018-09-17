import browserEnv from 'browser-env';
browserEnv();

describe("is getDocument() pure or impure ?", () => {

  it("is pure | impure", () => {

    function getDocument() {
      return window.document;
    }
    getDocument()

    let result = getDocument();

    console.log("--- exercise 11");
    console.log(result);

  });

});


