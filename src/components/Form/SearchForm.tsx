import { useState } from "react";
import axios from "axios";
import { SearchQuery } from "../../types/searchTypes";
import { queryStringFormatter } from "../../helpers/searchHelpers";
import { PrimaryButton } from "../UI/Button";

function SearchForm({ loadSearchResults }) {
  const [artist, setArtist] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    // ?q=childish%20gambino&type=artist&market=US&limit=10
    if (artist.length) {
      const query: SearchQuery = {
        q: encodeURIComponent(artist),
        type: "artist",
        market: "US",
        limit: 10,
      };

      const queryString = queryStringFormatter(query);

      try {
        const { data } = await axios({
          method: "POST",
          url: "/api/spotify",
          data: {
            query: queryString,
            endPoint: "search",
          },
        });
        console.log("data", data);
        loadSearchResults(data.artists.items);
      } catch (error) {
        console.log("error", error);
      }
    }
  }

  function handleChange(e) {
    setArtist(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label style={{ display: "block" }} htmlFor="artist">
          Search artists
        </label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={artist}
          onChange={handleChange}
        />
      </div>
      <PrimaryButton type="submit">Search</PrimaryButton>
    </form>
  );
}

export default SearchForm;
