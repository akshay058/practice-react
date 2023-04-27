import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./RouteComp/Home";
import Cart from "./RouteComp/Cart";
import About from "./RouteComp/About";
export default function AllRouter() {
  return (
    <div className="fs-2 text-center">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart/:id" element={<Cart />}></Route>
        <Route path="/cart/:id/:name" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}
