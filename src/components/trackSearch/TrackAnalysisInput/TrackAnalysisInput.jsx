import React from "react";
import "./TrackAnalysisInput.css";
import { token, canvasToken } from "/src/api/apiAuth.js";
import getCanvas from "/src/api/canvas/_canvasApi.js";
import { useOutletContext, useNavigate } from "react-router-dom";
import { retrieveTrackData, updateCurrentTrackData, retrieveArtistData, retrieveTrackFeatures } from "/src/api/apiFunctions.js";

function TrackAnalysisInput() {
  const { 
    trackId: [currentTrackId, changeCurrentTrackId], 
    trackArray: [tracksArray, changeTracksArray],
    canvas: [canvas, changeCanvas],
    currentTrack: [currentTrackData, changeCurrentTrackData],
  } = useOutletContext();

  const navigate = useNavigate();

  React.useEffect(() => {
    const extractTrackData = async () => {
      const trackData = await retrieveTrackData(token.access_token, currentTrackId);
      const artistsIdArray = trackData.artists.map((artist) => {
        return artist.id;
      }); 
      const artistData = await retrieveArtistData(token.access_token, artistsIdArray);
      const trackFeatures = await retrieveTrackFeatures(token.access_token, currentTrackId);
      updateCurrentTrackData(trackData, trackFeatures, artistData, changeCurrentTrackData);
      setTracksArray([{
        uri: trackData.uri
      }]);
    };

    currentTrackId && extractTrackData();  
  }, [currentTrackId]);

  React.useEffect(() => {
    const runCanvasRequest = async() => {
      try {
        const canvasResponse = await getCanvas(tracksArray, canvasToken.accessToken);
        setCanvas(canvasResponse.canvasesList[0].canvasUrl);
        navigate("/search");
      } catch(error) {
        console.log(error)
      }
    };
    
    tracksArray && runCanvasRequest();
  }, [tracksArray]);

  React.useEffect(() => {
    console.log(currentTrackData)
  }, [currentTrackData])

  const setTrackId = (id) => {
    changeCurrentTrackId(prevId => id);
  };

  const setTracksArray = (tracklistArray) => {
    changeTracksArray(prevArray => tracklistArray);
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
              autoComplete="off"
              className="track-analysis-input"
              name="track-analysis-input"
              type="url"
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <button 
            className="track-analysis-input--submit"
            onClick={handleSubmit}
            type="submit"
          >Submit</button>
        </form>
      </div>
    </>
  );
};

export default TrackAnalysisInput;