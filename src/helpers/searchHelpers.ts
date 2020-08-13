import { SearchQuery } from "../types/searchTypes";

export const queryStringFormatter = (query: SearchQuery) =>
  Object.keys(query).reduce(
    (acc, cur, index) =>
      acc + (index === 0 ? "" : "&") + cur + "=" + query[cur],
    "?"
  );
