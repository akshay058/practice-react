import React from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

export default function Cart() {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  return (
    <div>
      Cart
      <button
        className="ms-3"
        onClick={() => {
          navigate("/", { state: "From Cart" });
        }}
      >
        Redirect
      </button>
    </div>
  );
}
