const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const corsAnywhere = require("cors-anywhere");
const cors = require("cors")({origin: true});

const tokenEndpoint = "https://accounts.spotify.com/api/token";

const corsServer = corsAnywhere.createServer({
  originWhitelist: [
    "http://localhost:5173",
    "https://dansen.web.app",
    "https://www.dansen.web.app",
  ],
  requireHeader: ["origin", "x-requested-with"],
  removeHeaders: ["cookie", "cookie2"],
  setHeaders: {
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, User-Agent",
  },
});

const getSpotifyAccessToken = async (clientId, clientSecret) => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  // eslint-disable max-len
  const body = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`;
  // eslint-disable max-len
  try {
    const response = await fetch(tokenEndpoint, {
      method: "POST",
      headers: headers,
      body: body,
      redirect: "follow",
    });
    return await response.json();
  } catch (error) {
    logger.error("Error fetching Spotify access token:", error);
    throw new Error("Unable to fetch Spotify access token");
  }
};

exports.getSpotifyToken = onRequest(
  {secrets: ["SPOTIFY_CLIENT_SECRET"]},
  (request, response) => {
    cors(request, response, async () => {
      try {
        const token = await getSpotifyAccessToken(
          process.env.SPOTIFY_CLIENT_ID,
          process.env.SPOTIFY_CLIENT_SECRET,
        );
        response.send({
          "status": "success",
          "data": token,
        });
      } catch (error) {
        response.status(500).send("Error getting Spotify access token");
      }
    });
  },
);

exports.corsProxy = onRequest(
  (request, response) => {
    cors(request, response, () => {
      corsServer.emit("request", request, response);
    });
  },
);
