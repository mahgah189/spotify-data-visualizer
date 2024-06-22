import React from "react";
import "./CanvasPlayer.css";
import { useOutletContext } from "react-router-dom";

function CanvasPlayer() {
  const { 
    trackId: [trackId, changeTrackId], 
    trackArray: [tracksArray, changeTracksArray],
    canvas: [canvas, changeCanvas]
  } = useOutletContext();

  console.log(canvas.canvasUrl)

  return (
    <>
      <div className="canvas--container">
        {canvas.canvasUrl && 
          <video 
            className="canvas--video"
            autoPlay
            loop
            key={canvas.canvasUrl}
          >
            <source src={canvas.canvasUrl} />
          </video>}
      </div>
    </>
  )
};

export default CanvasPlayer;