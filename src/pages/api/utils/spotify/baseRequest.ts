import fetch from "node-fetch";

interface RequestOptions {
  method: string;
  headers: object;
  body?: object;
}

export async function baseRequest({
  slug = "",
  method = "get",
  body = null,
  access_token,
}) {
  const options: RequestOptions = {
    method,
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  if (body) {
    options.body = body;
    options.headers["Content-Type"] = "application/x-www-form-urlencoded";
  }

  try {
    return await fetch(`https://api.spotify.com/v1/${slug}`, options);
  } catch (error) {
    console.dir(error);
  }
}
