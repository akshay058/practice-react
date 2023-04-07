import { React, useContext } from "react";
import { messagecontext } from "./App";
const Comp3 = ({ setName }) => {
  const message = useContext(messagecontext);

  return (
    <div>
      <h2>{message} </h2>
      {/* <messagecontext.Consumer>
        {(value) => <h1>{value}</h1>}
      </messagecontext.Consumer> */}
      {/* <h3>hello Comp3</h3> */}
    </div>
  );
};
export default Comp3;
