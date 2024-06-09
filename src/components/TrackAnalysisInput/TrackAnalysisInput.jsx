import React from "react";
import "./TrackAnalysisInput.css";
import token from "/src/api/api.js";
import getCanvas from "/src/api/canvas/_canvasApi.js";
import { useOutletContext } from "react-router-dom";

function TrackAnalysisInput() {
  const { 
    trackId: [trackId, changeTrackId], 
    trackArray: [tracksArray, changeTracksArray]
  } = useOutletContext();

  function setTrackId(id) {
    changeTrackId(prevId => id);
  };

  function setTracksArray(tracklist) {
    changeTracksArray(prevArray => {
      return [tracklist]
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const trackUrl = new URL(e.target.form[0].value);
    const trackUrlId = trackUrl.pathname.split("/").pop();
    setTrackId(trackUrlId);
  };

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

  // This is just to view the data in the array

  React.useEffect(() => {
    async function runCanvasRequest() {
      const canvasResponse = await getCanvas(tracksArray, token);
      return canvasResponse;
    };

    tracksArray && console.log(runCanvasRequest())
  }, [tracksArray])

  return (
    <div className="track-analysis-input--container">
      <form 
        className="track-analysis-input--form"
        id="track-analysis-input--form"
      >
        <label htmlFor="track-analysis-input"></label>
        <input
          className="track-analysis-input"
          name="track-analysis-input"
          type="url"
        />
        <button 
          onClick={handleSubmit}
          type="submit"
        >Submit</button>
      </form>
    </div>
  );
};

export default TrackAnalysisInput;