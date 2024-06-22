import React from "react";
import "./Stats.css";
import TracklistMenu from "/src/components/TracklistMenu/TracklistMenu";
import TrackStatsCard from "/src/components/TrackStatsCard/TrackStatsCard";

function Stats({ toggleMenu }) {
  return (
    <div>
      <TrackStatsCard />
      <TracklistMenu toggleMenu={ toggleMenu } />
    </div>
  )
};

export default Stats;