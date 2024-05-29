const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

async function getSpotifyAccessToken() {
  const url = "https://accounts.spotify.com/api/token";
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  const body = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`;

  try { 
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
      redirect: 'follow'
    });
    const data = await response.json();
  } catch(error) {
    console.log(error)
  };

};

export default getSpotifyAccessToken;
