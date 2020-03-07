import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Characters from './components/Character';
import styled from 'styled-components';

const StyledDiv = styled.div `
  display: flex;
  flex-wrap: wrap;
  margin-left: 10%;
  width 100%;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [chars, setChars] = useState([])

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
  axios.get('https://swapi.co/api/people/')
  .then(function (response) {
    setChars(response.data.results);
  })
  .catch(function (err) {
    console.log(err);
  })},[]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StyledDiv>
        {chars.map(character => {
          return (
            <Characters 
              id = {character.url}
              name = {character.name}
              height = {character.height}
              mass = {character.mass}
              hairColor = {character.hair_color}
              skinColor = {character.skin_color}
              eyeColor = {character.eye_color}
              birthYear = {character.birth_year}
              gender = {character.gender}
            />
          )
        })}
      </StyledDiv>
    </div>
  );
}

export default App;