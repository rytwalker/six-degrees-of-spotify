import styled from "styled-components";
import SearchResult from "./SearchResult";

function SearchResults({ searchResults, handleSetArtist }) {
  if (searchResults) {
    return (
      <StyledSearchResults>
        {searchResults.map((searchResult) => {
          return (
            <SearchResult
              searchResult={searchResult}
              handleSetArtist={handleSetArtist}
            />
          );
        })}
      </StyledSearchResults>
    );
  }
}

const StyledSearchResults = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;

export default SearchResults;
