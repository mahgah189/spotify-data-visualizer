import React from "react";
import "./TrackStatsCard.css";
import CanvasPlayer from "./CanvasPlayer/CanvasPlayer";
import { useOutletContext, useNavigate } from "react-router-dom";

function TrackStatsCard() {
  const { 
    trackId: [currentTrackId, changeCurrentTrackId], 
    trackArray: [tracksArray, changeTracksArray],
    canvas: [canvas, changeCanvas]
  } = useOutletContext();

  const navigate = useNavigate();

  React.useEffect(() => {
    !tracksArray && navigate("/")
  }, [])

  return (
    <div className="music-stats--container">
      <div className="music-stats--canvas-wrapper">
        <CanvasPlayer />
      </div>
    </div>
  )
};

export default TrackStatsCard;