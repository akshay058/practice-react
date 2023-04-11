import React from "react";
import { useReducer } from "react";

export default function UseReducerHook() {
  const initialState = {
    count: 0,
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + action.payload };
      case "decrement":
        return { ...state, count: state.count - action.payload };
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
          onClick={() => dispatch({ type: "increment", payload: 10 })}
        >
          Increment
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "decrement", payload: 10 })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
