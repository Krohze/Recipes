import React from "react";
import styled from "styled-components";
import { Timer } from "@styled-icons/ionicons-outline/Timer";
import { Upvote } from "@styled-icons/boxicons-solid/Upvote";

function Card({ recipe }) {
  return (
    <StyledA href={recipe.sourceUrl} target="_blank">
      <StyledContainer>
        <StyledImage src={recipe.image} />
        <StyledSource>{recipe.sourceName}</StyledSource>
        <StyledText>{recipe.title}</StyledText>
        <StyledWrapper>
          <StyledInfo>
            <TimerIcon />
            <p>{recipe.readyInMinutes} mins</p>
          </StyledInfo>
          <StyledInfo>
            <ScoreIcon />
            {recipe.spoonacularScore}
          </StyledInfo>
        </StyledWrapper>
      </StyledContainer>
    </StyledA>
  );
}

export default Card;

const StyledA = styled.a`
  text-decoration: none;
  display: flex;
  color: inherit;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  &:hover {
    transform: translate(-2px, -2px);
    transition: 0.1s;
    box-shadow: 5px 5px ${(props) => props.theme.color.contrast};
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const StyledSource = styled.p`
  font-size: 16px;
  font-weight: 700;
  padding: 8px 24px 8px 24px;
  color: ${(props) => props.theme.color.contrast};
`;

const StyledText = styled.div`
  font-size: 28px;
  padding: 0px 24px 24px 24px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: auto;
  padding: 0px 24px 16px 24px;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
`;

const TimerIcon = styled(Timer)`
  color: ${(props) => props.theme.color.contrast};
  height: 16px;
  width: 16px;
  margin-right: 5px;
`;

const ScoreIcon = styled(Upvote)`
  color: ${(props) => props.theme.color.contrast};
  height: 16px;
  width: 16px;
  margin-right: 5px;
`;
