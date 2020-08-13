import { URLSearchParams } from "url";
import { authRequest } from "../utils/spotify";

export async function authSpotify(_req, res, next) {
  const params = new URLSearchParams("grant_type=client_credentials");
  try {
    const authResponse = await authRequest({
      method: "post",
      body: params.toString(),
    });
    const { access_token } = await authResponse.json();
    res.access_token = access_token;
    next();
  } catch (error) {
    console.log(error);
    next();
  }
}
