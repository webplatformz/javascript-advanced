const initialState = { count: 0 };
const renderArea = document.querySelector(".display");
const buttonInc = document.querySelector(".button-inc");
const buttonDec = document.querySelector(".button-dec");

function createStore(reducer) {
  const listeners = [];

  return {
    state: initialState,
    getState() {
      return this.state;
    },
    subscribe(listener) {
      /**
       * EXERCISE 1
       * Add given listener to listeners in scope
       * call this listener right away to get first state displayed
       */
    },
    dispatch(action) {
      /**
       * EXERCISE 2
       * pass current state and action to given reducer
       * save result as new state
       * call all listeners
       */
    }
  };
}

function reducer(state, action) {
  /**
   * EXERCISE 3
   * Handle two action types
   * One to increment count
   * One to decrement count
   */
  switch (action.type) {
  }

  return state;
}

const store = createStore(reducer);

store.subscribe(() => {
  const { count } = store.getState();
  renderArea.innerHTML = count;
});

buttonInc.addEventListener("click", () => {
  /**
   * Exercise 4
   * Dispatch Increase Action
   */
});
buttonDec.addEventListener("click", () => {
  /**
   * Exercise 4
   * Dispatch Decrease Action
   */
});
