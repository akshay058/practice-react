import React from "react";
import { useState } from "react";
export default function FormComp() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });
  //   const onChangeHandler = (event, key) => {
  //     setUserData({ ...userData, [key]: event.target.value });
  //   };
  const onChangeHandler = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  return (
    <div className="mt-4">
      <form action="" className="d-flex flex-column align-items-center">
        <input
          className="form-control w-50 my-2"
          type="text"
          placeholder="firstName"
          value={userData.firstName}
          name="firstName"
          onChange={(event) => onChangeHandler(event, "firstName")}
          //   onChange={(event) => setFirstName(event.target.value)}
          //   onChange={(event) =>
          //     setUserData({ ...userData, firstName: event.target.value })
          //   }
        />
        <input
          className="form-control w-50 my-2"
          type="text"
          placeholder="lastName"
          value={userData.lastName}
          name="lastName"
          onChange={(event) => onChangeHandler(event, "lastName")}
        />
        <input
          className="form-control w-50 my-2"
          type="password"
          placeholder="Password"
          value={userData.password}
          name="password"
          onChange={(event) => onChangeHandler(event, "password")}
        />
      </form>
    </div>
  );
}
