import React from "react";
import "./TrackAnalysisInput.css";
import token from "/src/functions/api.js";
import { useOutletContext } from "react-router-dom";

function TrackAnalysisInput() {
  const [trackId, changeTrackId] = useOutletContext();

  function setTrackId(id) {
    changeTrackId(prevId => id);
  };

  // this only works on submits past the 1st. Maybe I need to use useEffect?

  const handleSubmit = (e) => {
    e.preventDefault();
    const trackUrl = new URL(e.target.form[0].value);
    const trackUrlId = trackUrl.pathname.split("/").pop();
    setTrackId(trackUrlId);
  };

  React.useEffect(() => {
    fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
      headers: {
        "Authorization": `Bearer ${token.access_token}`
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }, [trackId]);

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