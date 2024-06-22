import React from "react";
import "./TrackStatsCard.css";
import CanvasPlayer from "./CanvasPlayer/CanvasPlayer";
import { useOutletContext, useNavigate } from "react-router-dom";

function TrackStatsCard() {
  const { 
    trackId: [trackId, changeTrackId], 
    trackArray: [tracksArray, changeTracksArray],
    canvas: [canvas, changeCanvas]
  } = useOutletContext();

  const navigate = useNavigate();

  React.useEffect(() => {
    !tracksArray && navigate("/")
  }, [])

  return (
    <>
      <CanvasPlayer />
    </>
  )
};

export default TrackStatsCard;