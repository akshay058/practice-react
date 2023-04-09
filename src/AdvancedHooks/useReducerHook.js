import React from "react";
import { useReducer } from "react";

export default function UseReducerHook() {
  const initialState = {
    count: 0,
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      default:
        return { ...state };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>count:{state?.count}</h3>
      <div>
        <button
          className="btn btn-success me-3"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
