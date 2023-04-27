import React from "react";
import { useNavigate } from "react-router-dom"; // to navigate desired location
import { useLocation } from "react-router-dom";
export default function Home() {
  const navigator = useNavigate();
  const location = useLocation();
  const redirect = () => {
    navigator("/about", {
      state: {
        // state data is passed during redirect to about // state between two location only
        user: "ABC",
        arr: [1, 2, 3, 4, 5],
      },
    }); // to navigate desired location
  };
  console.log(location);

  return (
    <div>
      Home
      <button className="btn btn-primary ms-3" onClick={() => redirect()}>
        Redirect
      </button>
    </div>
  );
}
