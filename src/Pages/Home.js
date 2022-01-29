import React from "react";
import styled from "styled-components";
import { SearchBar, RecipesList } from "../Components";
import useFetch from "../Hooks/useFetch";

const Home = () => {
  const { data, loading, error, fetchRecipes } = useFetch();

  return (
    <StyledContainer>
      <StyledHeader>
        <h1>Recipes</h1>
      </StyledHeader>

      <StyledMain>
        <SearchBar fetchRecipes={fetchRecipes} />
        <RecipesList recipes={data?.results} />
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
  z-index: 1;
  margin-bottom: 16px;
  border-bottom: 1px solid ${(props) => props.theme.color.contrast};
  background-color: white;
  color: ${(props) => props.theme.color.dark};
`;

const StyledMain = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-image: linear-gradient(white 0%, #e9fcfa 25%);
`;

const StyledFooter = styled.footer`
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-top: 1px solid ${(props) => props.theme.color.contrast};
  color: ${(props) => props.theme.color.dark};
`;
