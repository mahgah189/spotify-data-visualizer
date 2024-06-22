import React from "react";
import "./TracklistMenu.css";
import { useOutletContext } from "react-router-dom";

function TracklistMenu() {
  const [tracklistMenuToggle, switchTracklistMenuToggle] = React.useState("hamburger-closed");
  const { toggleMenu } = useOutletContext();

  return (
    <>
      <div className="tracklist-menu--open">
        <i 
          className={`fa-solid fa-angles-up ${tracklistMenuToggle === "hamburger-closed" ? "" : "hide-icon"}`}
          onClick={ () => toggleMenu(tracklistMenuToggle, switchTracklistMenuToggle) }
        ></i>
      </div>
      <div className={ `tracklist-menu--container ${tracklistMenuToggle}` }>
        <header className="tracklist-menu--header">
          <i 
            className="fa-solid fa-angles-down"
            onClick={ () => toggleMenu(tracklistMenuToggle, switchTracklistMenuToggle) }
          ></i>
        </header>
      </div>
    </>
  )
};

export default TracklistMenu;