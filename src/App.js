import React, { Component } from "react";
import logo from './logo.svg';
import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import Card from "./components/Card";
import Petrocard from "./components/Petrocard";
import './App.css';
import petro from "./petro.json"
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    petro

  }

  // Map over this.state.friends and render a PetroCard component for each Petroglyph object
  render() {
    return (
     
      <Wrapper>
        <Title>Petroglyphs</Title>
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
