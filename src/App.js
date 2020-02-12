import React, { Component } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header"
import Petrocard from "./components/Petrocard/Petrocard";
import petro from "./petro.json"
// import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import { createTypeAnnotationBasedOnTypeof } from "@babel/types";

class App extends Component {
  // Setting this.state.petro values
  state = {
    petro,
    clickedPetro: [],
    score: 0,
    status: "Click an image to begin!",
    topscore: 0
  };



  // function for when you click on an image event
  imageClick = event => {
    const currentPetroglyphs = event.target.alt;
    const imagesAlreadyClicked =
      this.state.clickedPetro.indexOf(currentPetroglyphs) > -1;

    if (this.state.score > this.state.topscore) {
      this.state.topscore = this.state.score;
    }

    // when an image is clicked , I need to check the clickedPetro arry for id of the image clicked. 


    // if already clicked, set score to zero, scramble images,  
    //reset already clicked array 
    if (imagesAlreadyClicked) {
      this.setState({
        petro: this.state.petro.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedPetro: [],
        score: 0,
        status: 'You guessed Incorrectly!'
      });



    } else {

      // if the image has not been clicked before , I need to: 

      //add id to the clickedPetro(glyph) array 
      //scramble the images 
      // check to see if the score exceeds the high score -NEED WORK

      

      this.setState(
        {
          petro: this.state.petro.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedPetro: this.state.clickedPetro.concat(
            currentPetroglyphs
          ),
          status: "You guessed Correctly!",
          score: this.state.score + 1,
          topscore: this.state.topscore

        },



        () => {



          // IF SCORE STATE =12 YOU WIN
          if (this.state.score === 12) {

            this.setState({
              petro: this.state.petro.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedPetro: [],
              score: 0,
              status: "AWESOME! YOU'RE A WINNER!"
            });
          }
        }
      );
    }
  };




  // Map over this.state.friends and render a PetroCard component for each Petroglyph object
  render() {
    return (

      <div>
        <Navbar
          status={this.state.status}
          score={this.state.score}
          topscore={this.state.topscore}
        />

        <Header />
        <Wrapper>
          {this.state.petro.map(petro => (
            <Petrocard
              imageClick={this.imageClick}
              id={petro.id}
              key={petro.id}
              image={petro.image}
            />
          ))}
        </Wrapper>

      </div>

    );
  }



}



export default App;
