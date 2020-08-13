import styled from "styled-components";

function SearchResult({ searchResult, handleSetArtist }) {
  function handleClick() {
    handleSetArtist(searchResult);
  }
  return (
    <StyledSearchResult onClick={handleClick}>
      <h3>{searchResult.name}</h3>
      {!!searchResult.images.length && (
        <img
          src={searchResult.images[0].url}
          alt={searchResult.name}
          style={{ width: "100px", height: "100px" }}
        />
      )}
      <ul>
        <li>Followers: {searchResult.followers.total}</li>
        <li>Popularity: {searchResult.popularity}</li>
      </ul>
    </StyledSearchResult>
  );
}

const StyledSearchResult = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 3px solid #eee;
  padding: 20px;
  margin-bottom: 36px;
  border-radius: 4px;
  transition: background-color 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
  }
  h3 {
    width: 100%;
    margin: 0 0 10px;
  }
`;

export default SearchResult;
