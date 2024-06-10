import React from "react";
import { NavLink } from "react-router-dom";
import "./LeftMenu.css";

function LeftMenu() {
  return (
    <nav className="left-menu">
      <div className="nav-menu--main">
        <NavLink
          className="nav-menu--link"
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "white" : "#b3b3b3"
          })}
        >
          Home
        </NavLink>
        <NavLink
          className="nav-menu--link"
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "white" : "#b3b3b3"
          })}
        >
          About
        </NavLink>
      </div>
    </nav>
  )
};

export default LeftMenu;