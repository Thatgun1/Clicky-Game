//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Card from "./components/Card/Card";
import character from "./characters.json";
import "./App.css";


//sets state to 0 or emptyd
class App extends Component {
  state = {
    character,
    clickedcharacter: [],
    score: 0
  };

//when you click on a card ... the character is taken out of the array
  imageClick = event => {
    const currentcharacter = event.target.alt;
    const characterAlreadyClicked =
      this.state.clickedcharacter.indexOf(currentcharacter) > -1;

//if you click on a character that has already been selected, the game is reset and cards reordered
    if (characterAlreadyClicked) {
      this.setState({
        character: this.state.character.sort(function() {
          return 0.5 - Math.random();
        }),
        clickedcharacter: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available character, your score is increased and cards reordered
    } else {
      this.setState(
        {
          character: this.state.character.sort(function() {
            return 0.5 - Math.random();
          }),
          clickedcharacter: this.state.clickedcharacter.concat(
            currentcharacter
          ),
          score: this.state.score + 1
        },
//if you get all 12 character correct you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              character: this.state.character.sort(function() {
                return 0.5 - Math.random();
              }),
              clickedcharacter: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, Card, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.character.map(character => (
            <Card
              imageClick={this.imageClick}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;