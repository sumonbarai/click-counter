import {
  createCounter,
  incrementActionCreator,
} from "./redux/features/counter/actionCreator";
import { CREATE_COUNTER } from "./redux/features/counter/actionType";
import store from "./redux/store";

const all_counter = document.getElementById("all_counter");

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

  all_counter.innerHTML = template;
}

function increment(id) {
  store.dispatch(incrementActionCreator(id));
}

function decrement() {
  console.log("decrement");
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
