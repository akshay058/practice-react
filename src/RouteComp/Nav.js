import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <ul
        style={{ listStyle: "none" }}
        className="d-flex w-50 justify-content-between"
      >
        <li>
          <NavLink
            // style={({ isActive }) =>
            //   isActive
            //     ? { backgroundColor: "red" }
            //     : { backgroundColor: "white" }
            // }
            to="/"
          >
            {/* {({ isActive }) => (isActive ? "Home Ative" : "Home")} */}
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/cart">Cart</NavLink>
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
