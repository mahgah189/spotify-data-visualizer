import React from "react";
import getSpotifyAccessToken from "/src/functions/api.js";

function Home() {
  async function getAccessToken() {
    const token = getSpotifyAccessToken();
    console.log(token);
    return token;
  }

  getAccessToken();

  return (
    <></>
  )
};

export default Home;