const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
const redirectUrl = "http://localhost:5173";

const authorizationEndpoint = "https://accounts.spotify.com/authorize";
const tokenEndpoint = "https://accounts.spotify.com/api/token";
const scope = 'user-read-private user-read-email';

// Data structure that manages the current active token, caching it in localStorage
// const currentToken = {
//   get access_token() { return localStorage.getItem('access_token') || null; },
//   get refresh_token() { return localStorage.getItem('refresh_token') || null; },
//   get expires_in() { return localStorage.getItem('refresh_in') || null },
//   get expires() { return localStorage.getItem('expires') || null },

//   save: function (response) {
//     const { access_token, refresh_token, expires_in } = response;
//     localStorage.setItem('access_token', access_token);
//     localStorage.setItem('refresh_token', refresh_token);
//     localStorage.setItem('expires_in', expires_in);

//     const now = new Date();
//     const expiry = new Date(now.getTime() + (expires_in * 1000));
//     localStorage.setItem('expires', expiry);
//   }
// };

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

export { token, canvasToken }