import React from "react";
import "./TrackStatsCard.css";
import CanvasPlayer from "./CanvasPlayer/CanvasPlayer";
import { useOutletContext } from "react-router-dom";

function TrackStatsCard() {
  const { 
    trackId: [trackId, changeTrackId], 
    trackArray: [tracksArray, changeTracksArray],
    canvas: [canvas, changeCanvas]
  } = useOutletContext();

  return (
    <>
      <CanvasPlayer />
    </>
  )
};

export default TrackStatsCard;