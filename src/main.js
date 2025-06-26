import { createStore } from "redux";

const initialValue = {
    id: "1",
    count: 0,
};

function reducer(state = initialValue, action) {
    if ("increment" === action.type) {
        return {
            ...state,
            count: state.count + 1,
        };
    } else if ("decrement" === action.type) {
        return {
            ...state,
            count: state.count - 1,
        };
    } else {
        return state;
    }
}

const store = createStore(reducer);

document.getElementById("increment").addEventListener("click", function () {
    store.dispatch({ type: "increment" });
});

document.getElementById("decrement").addEventListener("click", function () {
    store.dispatch({ type: "decrement" });
});

store.subscribe(function () {
    console.log(store.getState());
});
