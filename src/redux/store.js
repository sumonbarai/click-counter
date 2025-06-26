import { createStore } from "redux";
import counterReducer from "./features/counter/reducer";

const store = createStore(counterReducer);

export default store;
