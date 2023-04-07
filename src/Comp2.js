import { React } from "react";
import Comp3 from "./Comp3";

const Comp2 = ({ setName }) => {
  return (
    <div>
      <h3>hello Comp2</h3>
      <Comp3 />
    </div>
  );
};
export default Comp2;
