import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <StyledContainer>
      <StyledHeader>Recipes</StyledHeader>
      <StyledMain>Search bar and results</StyledMain>
      <StyledFooter>Footer</StyledFooter>
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
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  height: 50px;
`;

const StyledMain = styled.main``;

const StyledFooter = styled.footer`
  margin-top: auto;
`;
