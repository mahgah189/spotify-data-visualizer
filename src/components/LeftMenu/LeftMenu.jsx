import React from "react";
import { NavLink } from "react-router-dom";
import "./LeftMenu.css";

function LeftMenu() {

  const handleClick = () => {
    const leftMenu = document.getElementById("left-menu");

    leftMenu.classList.contains("nav-menu--hamburger-closed") 
      ? leftMenu.classList.remove("nav-menu--hamburger-closed") 
      : leftMenu.classList.add("nav-menu--hamburger-closed");
  };

  return (
    <>
      {/* The header is only visible on mobile */}
      <header class="header">
        <NavLink 
          className="header--site-logo"
          to="/"
        >
          CAPY
        </NavLink>
        <button 
          className="nav-menu--hamburger"
          onClick={ handleClick }
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </header>
      
      <nav className="left-menu nav-menu--hamburger-closed" id="left-menu">
        <div className="nav-menu--main">
          <NavLink 
            className="nav-menu--site-logo"
            to="/"
          >
            CAPY
          </NavLink>
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
          <i 
            className="fa-solid fa-x"
            onClick={ handleClick }
          ></i>
        </div>
      </nav>
    </>
  )
};

export default LeftMenu;