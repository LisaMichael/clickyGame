import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft">Clicky Game</li>
          <li className="itemCenter">Click an image to begin!</li>
          <li className="itemRight">Score: {this.props.score}</li>
          <li className="itemRight"></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;