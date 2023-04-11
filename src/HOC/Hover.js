import React, { useState } from "react";

export default function Hover() {
  const [count, setCount] = useState(1);
  const onIncrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>
        <h3 onMouseOver={() => onIncrementCount()}>Count -{count}</h3>
      </div>
    </div>
  );
}
