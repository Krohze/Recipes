import React, { useState } from "react";
import styled from "styled-components";
import { SearchBar, RecipesList } from "../Components";
import useFetch from "../Hooks/useFetch";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const spoonPop =
    "https://api.spoonacular.com/recipes/complexSearch?sort=popularity&number=3&apiKey=73d95ab19d8b46ccbc8ef8dda36c44f5";
  const testAPI = "https://dog.ceo/api/breeds/image/random";
  const { data, loading, error, refetch } = useFetch(testAPI);

  let spoonacularAPI = `https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=1&apiKey=73d95ab19d8b46ccbc8ef8dda36c44f5`;

  const handleSubmit = () => {
    refetch(testAPI);
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <h1>Recipes</h1>
      </StyledHeader>

      <StyledMain>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSubmit={handleSubmit}
        />
        {loading ? (
          <div>LOADING...</div>
        ) : (
          <RecipesList items={data ? data : ""} />
        )}
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
