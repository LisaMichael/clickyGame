import React from "react";
import "./style.css";



const Petrocard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require( props.image)} width="150" height="100" />
    </div>
  </div>
);




export default Petrocard;
