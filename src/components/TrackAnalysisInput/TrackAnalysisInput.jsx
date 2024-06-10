import React from "react";
import "./TrackAnalysisInput.css";
import { token, canvasToken } from "/src/api/api.js";
import getCanvas from "/src/api/canvas/_canvasApi.js";
import { useOutletContext } from "react-router-dom";

function TrackAnalysisInput() {
  const { 
    trackId: [trackId, changeTrackId], 
    trackArray: [tracksArray, changeTracksArray],
    canvas: [canvas, changeCanvas]
  } = useOutletContext();

  React.useEffect(() => {
    trackId && fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
      headers: {
        "Authorization": `Bearer ${token.access_token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTracksArray(data);
      })
  }, [trackId]);

  React.useEffect(() => {
    const runCanvasRequest = async() => {
      try {
        const canvasResponse = await getCanvas(tracksArray, canvasToken.accessToken);
        setCanvas(canvasResponse.canvasesList[0].canvasUrl);
        console.log(canvas);
      } catch(error) {
        console.log(error)
      }
    };
    tracksArray && runCanvasRequest();
  }, [tracksArray]);

  const setTrackId = (id) => {
    changeTrackId(prevId => id);
  };

  const setTracksArray = (tracklist) => {
    changeTracksArray(prevArray => [tracklist]);
  };

  const setCanvas = (canvasUrl) => {
    changeCanvas(prevCanvas => {
      return {
        canvasUrl: canvasUrl
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trackUrl = new URL(e.target.form[0].value);
    const trackUrlId = trackUrl.pathname.split("/").pop();
    setTrackId(trackUrlId);
  };

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
      <div className="track-analysis-input--container">
        <form 
          className="track-analysis-input--form"
          id="track-analysis-input--form"
        >
          <label 
            className="track-analysis-input--label"
            htmlFor="track-analysis-input"
          >
            Search for a Song or Playlist
          </label>
          <div className="track-analysis-input--input-wrapper">
            <input
              className="track-analysis-input"
              name="track-analysis-input"
              type="url"
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <button 
            onClick={handleSubmit}
            type="submit"
          >Submit</button>
        </form>
      </div>
    </>
  );
};

export default TrackAnalysisInput;