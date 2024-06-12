import React from "react";
import { NavLink } from "react-router-dom";
import "./NavMenu.css";

function LeftMenu({ toggleMenu }) {
  const [navMenuToggle, switchNavMenuToggle] = React.useState("hamburger-closed");

  return (
    <>
      {/* The header is only visible on mobile */}
      <header className="header">
        <NavLink 
          className="header--site-logo"
          to="/"
        >
          CAPY
        </NavLink>
        <button 
          className="nav-menu--hamburger"
          onClick={ () => toggleMenu(navMenuToggle, switchNavMenuToggle) }
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </header>

      <nav 
        className={ `nav-menu--container ${navMenuToggle}` }
      >
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
            onClick={ () => toggleMenu(navMenuToggle, switchNavMenuToggle) }
          ></i>
        </div>
      </nav>
    </>
  )
};

export default LeftMenu;