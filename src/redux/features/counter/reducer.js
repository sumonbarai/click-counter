import { CREATE_COUNTER, INCREMENT } from "./actionType";

const initialValue = [
  {
    id: 1,
    count: 0,
  },
];

function reducer(state = initialValue, action) {
  switch (action.type) {
    case INCREMENT: {
      const newState = state.map((counter) => {
        // if (!counter.id === action.payload.id) {
        //   return counter;
        // }

        if (!(counter.id === action.payload.id)) {
          return counter;
        }

        return {
          ...counter,
          count: counter.count + 1,
        };
      });
      console.log(newState);
      return newState;
    }
    case CREATE_COUNTER: {
      return [
        ...state,
        {
          id: state.length + 1,
          count: 0,
        },
      ];
    }

    default:
      return state;
  }
}

export default reducer;
