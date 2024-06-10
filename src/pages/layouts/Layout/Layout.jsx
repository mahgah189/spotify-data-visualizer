import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import LeftMenu from "/src/components/LeftMenu/LeftMenu";

function Layout() {
  const [trackId, changeTrackId] = React.useState(null);
  const [tracksArray, changeTracksArray] = React.useState(null);
  const [canvas, changeCanvas] = React.useState({})

  return (
    <div className="site-wrapper">
      <LeftMenu />
      <Outlet 
        context={{
          trackId: [trackId, changeTrackId],
          trackArray: [tracksArray, changeTracksArray],
          canvas: [canvas, changeCanvas]
        }} 
      />
    </div>
  )
};

export default Layout;