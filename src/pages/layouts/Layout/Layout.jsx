import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import NavMenu from "/src/components/NavMenu/NavMenu";
import TracklistMenu from "/src/components/TracklistMenu/TracklistMenu";

function Layout() {
  const [trackId, changeTrackId] = React.useState(null);
  const [tracksArray, changeTracksArray] = React.useState(null);
  const [canvas, changeCanvas] = React.useState({})

  const toggleMenu = (menuState, setMenuState) => {
    menuState === "hamburger-closed" 
      ? setMenuState("") 
      : setMenuState("hamburger-closed")
  }

  return (
    <div className="site-wrapper">
      <NavMenu toggleMenu={ toggleMenu } />
      <div className="layout-outlet">
        <Outlet 
          context={{
            trackId: [trackId, changeTrackId],
            trackArray: [tracksArray, changeTracksArray],
            canvas: [canvas, changeCanvas]
          }} 
        />
      </div>
      <TracklistMenu toggleMenu={ toggleMenu } />
    </div>
  )
};

export default Layout;