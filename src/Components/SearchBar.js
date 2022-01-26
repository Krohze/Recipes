import React from "react";
import styled from "styled-components";

const SearchBar = ({ searchTerm, setSearchTerm, handleSubmit }) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Search for a recipe"
        aria-label="Search for a recipe"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <StyledButton type="submit">SEARCH</StyledButton>
    </StyledForm>
  );
};

export default SearchBar;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 500px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  margin-right: 10px;
  border: none;
  border: 1px solid #bdbdbd;
  font-size: 24px;
  text-align: center;
  border-radius: 5px;
  &::placeholder {
    color: #a8a8a8;
    font-weight: 300;
  }
  :focus {
    outline: none;
    border: 2px solid #aaaaaa;
  }
  :focus::placeholder {
    color: transparent;
  }
`;

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: green;
  color: white;
  font-size: 16px;
  font-weight: 700;
`;
