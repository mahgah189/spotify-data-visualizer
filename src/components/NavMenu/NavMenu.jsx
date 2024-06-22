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

      <nav className={ `nav-menu--container ${navMenuToggle}` }>
        <div className="nav-menu--main">
          <NavLink 
            className="nav-menu--site-logo"
            to="/"
          >
            CAPY
          </NavLink>
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