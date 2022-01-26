import React from "react";
import styled from "styled-components";
import { Card } from "./";

const RecipesList = ({ items }) => {
  console.log(items.status);
  return (
    <StyledGrid>
      <Card item={items} />
      <Card item={items} />
      <Card item={items} />
      <Card item={items} />
    </StyledGrid>
  );
};

export default RecipesList;

const StyledGrid = styled.div`
  display: grid;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  border: solid 1px green;
`;
