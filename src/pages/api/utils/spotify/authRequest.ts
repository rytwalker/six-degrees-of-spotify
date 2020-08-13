import fetch from "node-fetch";
import btoa from "btoa";

interface RequestOptions {
  method: string;
  headers: object;
  body?: object;
}

export async function authRequest({
  url = "https://accounts.spotify.com/api/token",
  method = "get",
  body = null,
}) {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const headerToken = btoa(clientId + ":" + clientSecret);
  const options: RequestOptions = {
    method,
    headers: {
      Authorization: `Basic ${headerToken}`,
    },
  };

  if (body) {
    options.body = body;
    options.headers["Content-Type"] = "application/x-www-form-urlencoded";
  }

  console.log(url);
  console.log(options);
  try {
    return await fetch("https://accounts.spotify.com/api/token", options);
  } catch (error) {
    console.dir(error);
  }
}
