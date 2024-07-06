// const clientId = import.meta.env.VITE_CLIENT_ID;
// const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';

// const authorizationEndpoint = "https://accounts.spotify.com/authorize";
// // const tokenEndpoint = "https://accounts.spotify.com/api/token";
// const scope = 'user-read-private user-read-email';

// async function getSpotifyAccessToken() {
//   const headers = {
//     "Content-Type": "application/x-www-form-urlencoded"
//   };
//   const body = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`;

//   try { 
//     const response = await fetch(tokenEndpoint, {
//       method: "POST",
//       headers: headers,
//       body: body,
//       redirect: 'follow'
//     });
//     return await response.json();
//   } catch(error) {
//     console.log(error)
//   };
// };

let token;

const app = initializeApp({
  projectId: "statify-3b944",
  apiKey: `${import.meta.env.VITE_FIREBASE_API_KEY}`,
  authDomain: "statify-3b944.firebaseapp.com"
});
const functions = getFunctions(app);
const getSpotifyToken = httpsCallable(functions, "getSpotifyToken");
getSpotifyToken()
  .then((result) => {
    token = result.data;
  });

async function getCanvasAccessToken() {
  try {
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://open.spotify.com/get_access_token?reason=transport");
    return await response.json()
  } catch(error) {
    console.log(error)
  }
}

const canvasToken = await getCanvasAccessToken();

export { token, canvasToken };