import React from "react";
// import { useState } from "react";
import { increment, decrement, incrementBy } from "./redux/CountSlice"; // importing action from countSlice
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const countSelector = useSelector((state) => state.counter.count);
  const onIncrement = () => {
    // setCount(count + 1);
    dispatch(increment()); // for dispatch by redux tool kit
  };
  const onDecrement = () => {
    // setCount(count - 1);
    dispatch(decrement());
  };
  const onIncrementBy = (num) => {
    // setCount(count - 1);
    dispatch(incrementBy(num));
  };
  return (
    <div>
      <button onClick={() => onIncrement()}>Increment</button>
      <h3>Count is: {countSelector} </h3>
      <button onClick={() => onDecrement()}>Decrement</button>
      <button onClick={() => onIncrementBy(20)}>Increment by 20</button>
    </div>
  );
}
