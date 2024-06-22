import React from "react";
import "./Stats.css";
import TracklistMenu from "/src/components/TracklistMenu/TracklistMenu";
import TrackStatsCard from "/src/components/TrackStatsCard/TrackStatsCard";

function Stats() {
  return (
    <div>
      <TrackStatsCard />
      <TracklistMenu />
    </div>
  )
};

export default Stats;