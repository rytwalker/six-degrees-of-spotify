import { baseRequest } from "../utils/spotify";

export async function spotifyHandler(req, res) {
  switch (req.method) {
    case "POST":
      const response = await baseRequest({
        slug: `search?q=pup&type=artist&market=US&limit=10`,
        access_token: res.access_token,
      });
      res.status(200).json({ name: "atman" });
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
