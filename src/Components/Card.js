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
  background-color: white;
  &:hover {
    transform: translate(-2px, -2px);
    transition: 0.1s;
    //border-right: 2px solid ${(props) => props.theme.color.contrast};
    //border-bottom: 2px solid ${(props) => props.theme.color.contrast};
    box-shadow: 5px 5px ${(props) => props.theme.color.contrast};
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const StyledText = styled.div`
  font-size: 28px;
  font-weight: 700;
  padding: 16px 24px 24px 24px;
`;
