import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import SearchForm from "../components/Form/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults";
import { PrimaryButton } from "../components/UI/Button";
import Layout from "../components/Layout/Layout";

function Index() {
  const [searchResults, setSearchResults] = useState(null);
  const [startArtist, setStartArtist] = useState(null);
  const [endArtist, setEndArtist] = useState(null);

  async function handleClick() {
    try {
      const { data } = await axios({
        method: "POST",
        url: "/api/spotify",
        data: {
          query: `/${startArtist.id}/related-artists`,
          endPoint: "artists",
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  function loadSearchResults(results) {
    setSearchResults(results);
  }
  function handleSetArtist(artist) {
    setSearchResults(null);
    if (!startArtist) {
      setStartArtist(artist);
    } else {
      setEndArtist(artist);
    }
  }

  return (
    <Layout>
      <HeroWrapper>
        <Hero>
          Six <br />
          Degrees <br />
          of <br />
          Spotify
        </Hero>
        <CTAButton>Play</CTAButton>
      </HeroWrapper>
      {/* <h1>Hello</h1>
      {startArtist && <div>{startArtist.name}</div>}
      {endArtist && <div>{endArtist.name}</div>}
      {startArtist && endArtist && (
        <PrimaryButton onClick={handleClick}>
          Calculate Difficulty
        </PrimaryButton>
      )}
      <h2>Search</h2>
      <SearchForm loadSearchResults={loadSearchResults} />
      {searchResults && (
        <SearchResults
          searchResults={searchResults}
          handleSetArtist={handleSetArtist}
        />
      )} */}
    </Layout>
  );
}

const HeroWrapper = styled.main`
  height: calc(100vh - 112px);
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Hero = styled.h1`
  margin: 0 0 24px;
  padding: 0;
  font-size: ${({ theme }) => theme.typeScale.heading1};
  font-family: ${({ theme }) => theme.headingFont};
  text-transform: uppercase;
`;

const CTAButton = styled(PrimaryButton)`
  width: 200px;
`;

export default Index;
