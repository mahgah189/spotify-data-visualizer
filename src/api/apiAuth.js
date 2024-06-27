const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
const redirectUrl = "http://localhost:5173";

const authorizationEndpoint = "https://accounts.spotify.com/authorize";
const tokenEndpoint = "https://accounts.spotify.com/api/token";
const scope = 'user-read-private user-read-email';

async function getSpotifyAccessToken() {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  const body = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`;

  try { 
    const response = await fetch(tokenEndpoint, {
      method: "POST",
      headers: headers,
      body: body,
      redirect: 'follow'
    });
    return await response.json();
  } catch(error) {
    console.log(error)
  };

};

async function getCanvasAccessToken() {
  try {
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://open.spotify.com/get_access_token?reason=transport");
    return await response.json()
  } catch(error) {
    console.log(error)
  }
}

const token = await getSpotifyAccessToken();
const canvasToken = await getCanvasAccessToken();

export { token, canvasToken };