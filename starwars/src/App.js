import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Characters from "./components/Character";

// StyledDiv is the given name (can be anything) styled. is pulling from the styledComponents import.
// .div is what element is created (can be any element)

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10%;
  width 100%;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [chars, setChars] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(function(response) {
        setChars(response.data.results);
      })
      .catch(function(err) {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StyledDiv>
        {chars.map(character => {
          // chars is an array of (people) data from the API.
            //console.log(chars);

          // character is now each item (person) in that array being mapped
            //console.log(character);

          return (
            <Characters
              id={character.url}
              name={character.name}
              height={character.height}
              mass={character.mass}
              hairColor={character.hair_color}
              skinColor={character.skin_color}
              eyeColor={character.eye_color}
              birthYear={character.birth_year}
              gender={character.gender}
            //example={character.exampleData}
            />
          );
        })}
      </StyledDiv>
    </div>
  );
};

export default App;
