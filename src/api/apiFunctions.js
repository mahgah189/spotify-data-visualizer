const retrieveTrackData = async (accessToken, trackId) => {
  try {
    const settings = {
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    };
    const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, settings);
    const data = await response.json();
    console.log(data);
    return data;
    // updateTrackArray([data]);
  } catch(error) {
    console.log(error);
  }
};

const retrieveTrackFeatures = async (accessToken, trackId) => {
  try {
    const settings = {
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    };
    const response = await fetch(`https://api.spotify.com/v1/audio-features/${trackId}`, settings);
    const data = await response.json();
    console.log(data);
    return data;
  } catch(error) {
    console.log(error);
  }
};

const retrieveArtistData = async (accessToken, artistIdArray) => {
  const artistDataArray = artistIdArray.map(async (artist) => {
    try {
      const settings = {
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
      };
      const response = await fetch(`https://api.spotify.com/v1/artists/${artist}`, settings);
      const data = await response.json();
      return {
        artistId: data.id,
        artistName: data.name,
        artistImages: data.images,
        artistGenres: data.genres
      };
    } catch(error) {
      console.log(error);
    }
  });

  const resolvedArtistData = await Promise.all(artistDataArray)
  console.log(resolvedArtistData);
};

const updateCurrentTrackData = (trackData, trackFeatures, artistDataArray, trackDataUpdateFunction) => {

  trackDataUpdateFunction(prevTrackData => {
    return {
      trackData: {
        trackAlbum: trackData.album.name,
        trackArtists: artistDataArray,
        trackId: trackData.id,
        trackName: trackData.name,
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
    }
  })
};

export { retrieveTrackData, updateCurrentTrackData, retrieveTrackFeatures, retrieveArtistData };