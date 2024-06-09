import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  const [trackId, changeTrackId] = React.useState(null);
  const [tracksArray, changeTracksArray] = React.useState(null);
  const [canvas, changeCanvas] = React.useState(null)

  return (
    <div className="site-wrapper">
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