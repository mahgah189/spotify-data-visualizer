import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';

let token;
const proxyWithCorsAnywhereServerURL = "https://corsproxy-z2tzeokdqq-uc.a.run.app/";
const canvasEndpoint = "https://open.spotify.com/get_access_token?reason=transport";

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
    const response = await fetch(proxyWithCorsAnywhereServerURL + canvasEndpoint);
    return await response.json()
  } catch(error) {
    console.log(error)
  }
};

const canvasToken = await getCanvasAccessToken();

export { token, canvasToken };