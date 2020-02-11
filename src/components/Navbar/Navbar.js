import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
  render() {
    return (
        <div>
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft">Clicky Game</li>
          <li className="itemCenter">{this.props.status}</li>
          <li className="itemRight1">Score: {this.props.score}</li>
          <li className="itemRight2">Top Score: {this.props.topscore}</li>
        </ul>
      </nav>
      </div>
    );
  }
}

export default Navbar;