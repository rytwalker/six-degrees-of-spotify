import { NextApiRequest, NextApiResponse } from "next";
import { runMiddleware } from "./helpers/runMiddleware";
import { baseRequest } from "./utils/spotify";
import { authSpotify } from "./middleware/authSpotify";
import RelatedArtistsGraph from "./services/RelatedArtistsGraph";

type NextApiResponseWithAccessToken = NextApiResponse & {
  access_token?: string;
};

const TLATW_SPOTIFY_ID = "6ls5A8Wys9Swixpz4v6kj3";

export default async (
  req: NextApiRequest,
  res: NextApiResponseWithAccessToken
) => {
  switch (req.method) {
    case "POST":
      try {
        await runMiddleware(req, res, authSpotify);
        const slug = req.body.endPoint + req.body.query;
        if (req.body.endPoint === "artists") {
          const response = await baseRequest({
            slug,
            access_token: res.access_token,
          });
          const jsonResponse = await response.json();
          await RelatedArtistsGraph.createGraph(jsonResponse);
          return res.status(200).json(jsonResponse);
        } else {
          const response = await baseRequest({
            slug,
            access_token: res.access_token,
          });
          const jsonResponse = await response.json();
          res.status(200).json(jsonResponse);
        }
      } catch (error) {
        res.status(500).json({ error });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
