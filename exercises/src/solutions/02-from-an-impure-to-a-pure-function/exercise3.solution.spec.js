import browserEnv from 'browser-env';
browserEnv();

describe("method getDocument referencing external/global state", () => {

  it("is pure", () => {

    //  solution: remove the out-pointer to the global variable from the method and replace it by a local variable
    function getDocument(win) {
      return win.document;
    }

    getDocument(window);

  });

});


