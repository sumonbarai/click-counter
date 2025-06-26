import { CREATE_COUNTER, DECREMENT, INCREMENT } from "./actionType";

export function createCounter() {
  return {
    type: CREATE_COUNTER,
  };
}
export function incrementActionCreator(id) {
  return {
    type: INCREMENT,
    payload: { id },
  };
}
export function decrementActionCreator() {
  return {
    type: DECREMENT,
  };
}
