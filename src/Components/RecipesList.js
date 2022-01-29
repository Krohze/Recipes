import React from "react";
import styled from "styled-components";
import { Card } from "./";
import useFetch from "../Hooks/useFetch";

const RecipesList = ({ recipes }) => {
  const cards = recipes?.map((recipe, key) => (
    <Card key={key} recipe={recipe} />
  ));

  return <StyledGrid>{cards}</StyledGrid>;
};

export default RecipesList;

const StyledGrid = styled.div`
  display: grid;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;
