import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  const [trackId, changeTrackId] = React.useState(null);

  return (
    <div className="site-wrapper">
      <Outlet context={[trackId, changeTrackId]} />
    </div>
  )
};

export default Layout;