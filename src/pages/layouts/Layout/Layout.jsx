import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import NavMenu from "/src/components/NavMenu/NavMenu";

function Layout() {
  const [currentTrackId, changeCurrentTrackId] = React.useState(null);
  const [tracksArray, changeTracksArray] = React.useState(null);
  const [canvas, changeCanvas] = React.useState({})
  const [currentTrackData, changeCurrentTrackData] = React.useState({
    trackData: {
      trackAlbum: null,
      trackArtists: [
        {
          artistId: null,
          artistName: null,
          artistImages: null,
          artistGenres: null
        }
      ],
      trackId: null,
      trackName: null,
      trackStats: {
        trackAcousticness: null,
        trackDanceability: null,
        trackDuration: null,
        trackEnergy: null,
        trackKey: null,
        trackLoudness: null,
        trackPopularity: null,
        trackSpeechiness: null,
        trackTempo: null,
        trackTimeSignature: null,
        trackValence: null
      }
    }
  });

  return (
    <div className="site-wrapper">
      <div className="layout-outlet">
        <Outlet 
          context={{
            trackId: [currentTrackId, changeCurrentTrackId],
            trackArray: [tracksArray, changeTracksArray],
            canvas: [canvas, changeCanvas],
            currentTrack: [currentTrackData, changeCurrentTrackData],
          }} 
        />
      </div>
      <NavMenu />
    </div>
  )
};

export default Layout;