import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SearchBar, RecipesList } from "../Components";
import fetchRecipes from "../Helper/fetchRecipes";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const submitSearch = () => {
    console.log("submit search");
  };

  useEffect(() => {
    console.log("hello");
  }, []);

  return (
    <StyledContainer>
      <StyledHeader>
        <h1>Recipes</h1>
      </StyledHeader>

      <StyledMain>
        <SearchBar props={(searchTerm, setSearchTerm, submitSearch)} />
        <RecipesList props={searchResults} />
      </StyledMain>

      <StyledFooter>
        <h2>Footer</h2>
      </StyledFooter>
    </StyledContainer>
  );
};

export default Home;

const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  height: 50px;
  margin-bottom: 16px;
  border-bottom: 1px solid orange;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 16px;
  padding: 10px 0;
  border: 1px solid red;
`;

const StyledFooter = styled.footer`
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-top: 1px solid orange;
`;
