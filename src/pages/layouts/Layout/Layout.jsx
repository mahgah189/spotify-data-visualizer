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

  const retrieveTrackData = async (accessToken, trackId, updateTrackArray) => {
    try {
      const settings = {
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
      };
      const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, settings);
      const data = await response.json();
      console.log(data);
      updateTrackArray(data);
    } catch(error) {
      console.log(error);
    }
  };

  // this is incomplete. Need to also make API calls for track features

  // const updateCurrentTrackData = (trackData, trackDataUpdateFunction) => {
  //   trackDataUpdateFunction(prevTrackData => {
  //     return {
  //       trackData: {
  //         trackAlbum: trackData.album.name,
  //         trackArtists: [
  //           {
  //             artistId: null,
  //             artistName: null,
  //             artistImages: null,
  //             artistGenres: null
  //           }
  //         ],
  //         trackId: trackData.id,
  //         trackName: trackData.name,
  //         trackStats: {
  //           trackAcousticness: null,
  //           trackDanceability: null,
  //           trackDuration: null,
  //           trackEnergy: null,
  //           trackKey: null,
  //           trackLoudness: null,
  //           trackPopularity: null,
  //           trackSpeechiness: null,
  //           trackTempo: null,
  //           trackTimeSignature: null,
  //           trackValence: null
  //         }
  //       }
  //     }
  //   })
  // };

  const toggleMenu = (menuState, setMenuState) => {
    menuState === "hamburger-closed" 
      ? setMenuState("") 
      : setMenuState("hamburger-closed")
  }

  return (
    <div className="site-wrapper">
      <NavMenu toggleMenu={ toggleMenu } />
      <div className="layout-outlet">
        <Outlet 
          context={{
            trackId: [currentTrackId, changeCurrentTrackId],
            trackArray: [tracksArray, changeTracksArray],
            canvas: [canvas, changeCanvas],
            toggleMenu: toggleMenu,
            retrieveTrackData: retrieveTrackData
          }} 
        />
      </div>
    </div>
  )
};

export default Layout;