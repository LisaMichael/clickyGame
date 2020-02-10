import React, { Component } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header"
import Petrocard from "./components/Petrocard";
import petro from "./petro.json"
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";

class App extends Component {
  // Setting this.state.petro values
  state = {
    petro,
    clickedPetro: [],
    score: 0,
    highscore: 0

  };

  // function for when you click on an image 


    // Filter this.state.friends for friends with an id not equal to the id being removed

    // when an image is clicked , I need to check the clickedPetro arry for id of the image clicked. 



    // if the image has already been clicked, set score to 0. Game over 


    // if the image has not been clicked , I need to: 

    //incrment the score by  1 

    //add id to the clickedPetro(glyph) array 
    // check to see if the score exceeds the high score 
    //scramble the images 

    // if the score = 12, the user wins, display message (not in hw specs)

    imageClick = event => {
      const currentPetroglyphs = event.target.alt;
      const imagesAlreadyClicked =
        this.state.clickedPetro.indexOf(currentPetroglyphs) > -1;


      if (imagesAlreadyClicked) {
        this.setState({
          petro: this.state.petro.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedPetro: [],
          score: 0
        });
        alert("Better luck next time! Try again?");


      } else {
        this.setState(
          {
            petro: this.state.petro.sort(function (a, b) {
              return 0.5 - Math.random();
            }),
            clickedPetro: this.state.clickedPetro.concat(
              currentPetroglyphs
            ),
            score: this.state.score + 1
          },

          () => {
            if (this.state.score === 12) {
              alert("Yay! You Win!");
              this.setState({
                petro: this.state.petro.sort(function (a, b) {
                  return 0.5 - Math.random();
                }),
                clickedPetro: [],
                score: 0
              });
            }
          }
        );
      }
    };


  

  // Map over this.state.friends and render a PetroCard component for each Petroglyph object
  render() {
    return (


      <Wrapper>
        <Navbar></Navbar>
        <Title></Title>
        <Header></Header>

        {this.state.petro.map(petro => (
          <Petrocard

            id={petro.id}
            key={petro.id}
            name={petro.name}
            image={petro.image}

          />
        ))}
      </Wrapper>
    );
  }


}



export default App;
