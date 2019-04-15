import React from 'react';
// import logo from './logo.svg';
import './App.css';
import character from "./components/characters.json";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Wrapper>
      <title>Game of Thrones Click Game</title>
      <Card
        name={character[1].name}
        image={character[1].image}
      />
      <Card
        name={character[2].name}
        image={character[2].image}
      />
      <Card
        name={character[3].name}
        image={character[3].image}
      />
    </Wrapper>
  );

}

export default App;
