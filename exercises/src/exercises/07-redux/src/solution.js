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
      listeners.push(listener);
      listener();
    },
    dispatch(action) {
      this.state = reducer(this.state, action);
      listeners.forEach(listener => listener());
    }
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return {
        count: state.count + 1
      };
    case "DEC":
      return {
        count: state.count === 0 ? 0 : state.count - 1
      };
  }

  return state;
}

const store = createStore(reducer);

store.subscribe(() => {
  const { count } = store.getState();
  renderArea.innerHTML = count;
});

buttonInc.addEventListener("click", () => {
  store.dispatch({
    type: "INC"
  });
});
buttonDec.addEventListener("click", () => {
  store.dispatch({
    type: "DEC"
  });
});
