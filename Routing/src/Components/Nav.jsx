import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full h-16 flex justify-center items-center gap-10 border-b">
    <NavLink className={(e)=>e.isActive?"text-blue-400":""} to="/">Home</NavLink >
      <NavLink className={(e)=>e.isActive?"text-blue-400":""} to="/product">Product</NavLink >
      <NavLink className={(e)=>e.isActive?"text-blue-400":""} to="/about">About</NavLink >
       <NavLink className={(e)=>e.isActive?"text-blue-400":""} to="/service">Service</NavLink >
    </nav>
  );
};

export default Nav;
