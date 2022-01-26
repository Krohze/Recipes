import React from "react";
import styled from "styled-components";

function Card({ item }) {
  console.log(item.status);
  return (
    <StyledContainer>
      <StyledImage src={item.message} />
      <StyledText>{item.status}</StyledText>
    </StyledContainer>
  );
}

export default Card;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
`;
const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const StyledText = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  padding: 10px;
`;
