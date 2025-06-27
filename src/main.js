import {
  createCounter,
  decrementActionCreator,
  incrementActionCreator,
} from "./redux/features/counter/actionCreator";

import store from "./redux/store";

const all_counter = document.getElementById("all_counter");
const total = document.getElementById("total");

render();

// all functionality

function render() {
  const counterState = store.getState();

  let template = "";
  counterState.forEach((counter) => {
    template += `<div class="box-container">
          <h2 id="count" class="box-container-count">${counter.count}</h2>
          <div class="button-container">
            <button  class="btn decrement-btn" onclick="decrement(${counter.id})" >Decrement</button>
            <button  class="btn increment-btn" onclick="increment(${counter.id})" >Increment</button>
          </div>
        </div>`;
  });

  const totalCount = counterState.reduce(
    (accumulator, current) => accumulator + current.count,
    0
  );

  all_counter.innerHTML = template;
  total.innerText = `Total = ${totalCount}`;
}

function increment(id) {
  store.dispatch(incrementActionCreator(id));
}

function decrement(id) {
  const state = store.getState();

  const currentCounter = state.find((counter) => counter.id === id);

  if (currentCounter.count <= 0) return;
  store.dispatch(decrementActionCreator(id));
}

function createCounterFn() {
  //   store.dispatch({
  //     type: CREATE_COUNTER,
  //   });
  store.dispatch(createCounter());
}

store.subscribe(() => {
  render();
});

window.increment = increment;
window.decrement = decrement;
window.createCounterFn = createCounterFn;
