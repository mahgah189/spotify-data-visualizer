import React from "react";
import { NavLink } from "react-router-dom";
import "./NavMenu.css";

function NavMenu() {

  return (
    <>
      <nav className="nav-menu--container">
        <div className="nav-menu--main">
          <div className="nav-menu--links-container">
            <NavLink
              className="nav-menu--link"
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "white" : "#e8e8e8"
              })}
            >
              Search
            </NavLink>
            <NavLink
              className="nav-menu--link"
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "white" : "#e8e8e8"
              })}
            >
              FAQ
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  )
};

export default NavMenu;