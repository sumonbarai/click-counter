import { CREATE_COUNTER, DECREMENT, INCREMENT } from "./actionType";

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

      return newState;
    }

    case DECREMENT: {
      const newState = state.map((counter) => {
        if (!(counter.id === action.payload)) {
          return counter;
        }

        return {
          ...counter,
          // check count is not less then 0
          count: counter.count <= 0 ? counter.count : counter.count - 1,
        };
      });

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
