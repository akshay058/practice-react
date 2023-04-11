// used for catching...
//used for primitive type only....for storing data which require re-render but no value change
import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const slowFunc = (n) => {
  for (let i = 0; i < 10000000; i++) {}
  return n * 2;
};

export default function UseMemoHook() {
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(0);

  const multValue = useMemo(() => {
    return slowFunc(num);
  }, [num]);
  return (
    <div>
      <div>
        <h3>Count - {count}</h3>
        <h3>
          {num} *2= {multValue}
        </h3>
      </div>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increment count
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Increment Number
      </button>
    </div>
  );
}
