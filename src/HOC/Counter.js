import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);
  const onIncrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>
        <h3>Count -{count}</h3>
      </div>

      <button
        className="btn btn-primary me-3"
        onClick={() => onIncrementCount()}
      >
        Increment Count
      </button>
    </div>
  );
}
