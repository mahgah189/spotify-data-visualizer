import React from "react";
import "./CanvasPlayer.css";
import { useOutletContext } from "react-router-dom";

function CanvasPlayer() {
  const { 
    trackId: [currentTrackId, changeCurrentTrackId], 
    trackArray: [tracksArray, changeTracksArray],
    canvas: [canvas, changeCanvas]
  } = useOutletContext();

  const [canvasMinimized, changeCanvasMinimized] = React.useState(true);

  console.log(canvas.canvasUrl)

  return (
    <>
      <div className="canvas--container">
        {canvas.canvasUrl && 
          <video 
            className="canvas-video--minimized"
            autoPlay
            loop
            key={canvas.canvasUrl}
            playsInline
          >
            <source src={canvas.canvasUrl} />
          </video>}
      </div>
    </>
  )
};

export default CanvasPlayer;