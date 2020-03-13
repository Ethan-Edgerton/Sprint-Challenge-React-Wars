import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: white;
  margin: 1rem;
  width: 15vw;
  border: 3px solid black;
  border-radius: 0.5rem;
`;

const StyledName = styled.h1`
  text-shadow: 1px 1px 5px rgb(236, 33, 33);
`;

const CharacterComponent = props => {
  return (
    // props = "character" from {chars.map(character => {} from App.js
    <StyledDiv key={props.id}>
      <StyledName>{props.name}</StyledName>
      <p>Height: {props.height} cm</p>
      <p>Mass: {props.mass} Kg</p>
      <p>Hair Color: {props.hairColor}</p>
      <p>Skin Color: {props.skinColor}</p>
      <p>Eye Color: {props.eyeColor}</p>
      <p>Year of Birth: {props.birthYear}</p>
      <p>Gender: {props.gender}</p>
  {// <p>ExampleText: {props.exampleData}
  }
    </StyledDiv>
  );
};

export default CharacterComponent;
