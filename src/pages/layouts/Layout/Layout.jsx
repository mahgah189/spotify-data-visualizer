import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  const [trackId, changeTrackId] = React.useState(null);
  const [tracksArray, changeTracksArray] = React.useState(null);

  return (
    <div className="site-wrapper">
      <Outlet 
        context={{
          trackId: [trackId, changeTrackId],
          trackArray: [tracksArray, changeTracksArray]
        }} 
      />
    </div>
  )
};

export default Layout;