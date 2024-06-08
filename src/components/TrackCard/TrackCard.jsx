import React from "react";
import "./TrackCard.css";
import token from "/src/api/api.js";

function TrackCard() {
  fetch("https://api.spotify.com/v1/audio-features/7aGcgv4G1upG0XK6nHC5rF", {
    headers: {
      "Authorization": `Bearer ${token.access_token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      fetch("https://api.spotify.com/v1/audio-analysis/7aGcgv4G1upG0XK6nHC5rF", {
        headers: {
          "Authorization": `Bearer ${token.access_token}`
        }
      })
        .then(response => response.json())
        .then(data => console.log(data))
    })

  return (
    <></>
  )
};

export default TrackCard;