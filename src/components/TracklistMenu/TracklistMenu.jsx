import React from "react";
import "./TracklistMenu.css";

function TracklistMenu({ toggleMenu }) {
  const [tracklistMenuToggle, switchTracklistMenuToggle] = React.useState("hamburger-closed");

  return (
    <>
      <div className="tracklist-menu--open">
        <i 
          class="fa-solid fa-angles-up"
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