import { React } from "react";
import Comp2 from "./Comp2";

const Comp1 = ({ setName }) => {
  return (
    <div>
      <button
        onClick={() => setName("Random" + Math.floor(Math.random() * 100))}
      >
        {" "}
        Get Text
      </button>
      <Comp2 />
    </div>
  );
};
export default Comp1;
